import { NativeOnlyAnimatedView } from '@/components/native-only-animated-view';
import { Text, TextStyleContext } from '@/components/text';
import {
  getButtonFocusStyle,
  getButtonPressedFilter,
  getButtonShadowStyle,
  getButtonSizeStyle,
  getButtonVariantStyle,
  type ButtonSize,
  type ButtonVariant,
} from '@/lib/button-styles';
import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as SelectPrimitive from '@rn-primitives/select';
import * as React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';
import Svg, { Path } from 'react-native-svg';

// Custom icons matching web version exactly
function SelectChevronIcon({ size, color }: { size: number; color: string }) {
  // Chevron path scaled to fill a square viewBox
  // Original web: viewBox="3.25 5.25 9.5 5.5", path="M4 6L8 10L12 6"
  // Scaled to fit 0 0 12 12 viewBox while maintaining proportions
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M2 4L6 8L10 4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SelectCheckIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill={color}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
      />
    </Svg>
  );
}

// ============================================================================
// Types
// ============================================================================

type SelectSize = ButtonSize; // '1' | '2' | '3' | '4'
type SelectTriggerVariant = 'surface' | 'soft' | 'ghost';

// ============================================================================
// Select Context
// ============================================================================

type SelectContextValue = {
  size: SelectSize;
  labelMap: React.MutableRefObject<Map<string, string>>;
  value: { value: string; label: string } | undefined;
  open: boolean;
};

const SelectContext = React.createContext<SelectContextValue>({
  size: '2',
  labelMap: { current: new Map() },
  value: undefined,
  open: false,
});

// Trigger context for passing variant/color to SelectValue
type SelectTriggerContextValue = {
  variant: SelectTriggerVariant;
  color: Color;
  disabled?: boolean;
};

const SelectTriggerContext = React.createContext<SelectTriggerContextValue>({
  variant: 'surface',
  color: 'gray',
  disabled: false,
});

// Content context for item position registration (native scroll-to-selected)
type SelectContentContextValue = {
  registerItemPosition: (value: string, y: number) => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const SelectContentContext = React.createContext<SelectContentContextValue>({
  registerItemPosition: noop,
});

// ============================================================================
// Select.Root
// ============================================================================

type SelectRootProps = Omit<SelectPrimitive.RootProps, 'value' | 'onValueChange'> & {
  size?: SelectSize;
  value?: { value: string; label: string } | undefined;
  onValueChange?: (value: { value: string; label: string } | undefined) => void;
};

function SelectRoot({ size = '3', value, onValueChange, children, ...props }: SelectRootProps) {
  const labelMapRef = React.useRef<Map<string, string>>(new Map());
  const [open, setOpen] = React.useState(false);

  // Handle open state changes
  const handleOpenChange = React.useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);
      props.onOpenChange?.(isOpen);
    },
    [props.onOpenChange]
  );

  // Intercept onValueChange to ensure we use the correct label from our map
  const handleValueChange = React.useCallback(
    (newValue: { value: string; label: string } | undefined) => {
      if (newValue && labelMapRef.current.has(newValue.value)) {
        // Use the label from our map (web primitive doesn't pass correct label)
        const label = labelMapRef.current.get(newValue.value) ?? '';
        onValueChange?.({ value: newValue.value, label });
      } else {
        onValueChange?.(newValue);
      }
    },
    [onValueChange]
  );

  // Cast types as the primitive types expect Option but we use { value, label }
  const primitiveValue = value as unknown as SelectPrimitive.RootProps['value'];
  const primitiveOnChange =
    handleValueChange as unknown as SelectPrimitive.RootProps['onValueChange'];

  const contextValue = React.useMemo(
    () => ({ size, labelMap: labelMapRef, value, open }),
    [size, value, open]
  );

  // Context must wrap the Root so it's available in the Portal
  return (
    <SelectContext.Provider value={contextValue}>
      <SelectPrimitive.Root
        {...props}
        value={primitiveValue}
        onValueChange={primitiveOnChange}
        onOpenChange={handleOpenChange}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  );
}

// ============================================================================
// Select.Value
// ============================================================================

type SelectValueProps = {
  placeholder?: string;
};

function SelectValue({ placeholder, ...props }: SelectValueProps) {
  const { size, value } = React.useContext(SelectContext);
  const { variant, color, disabled } = React.useContext(SelectTriggerContext);
  const { colors } = useThemeTokens();

  // Get text size based on select size
  const textSize = size === '1' ? '1' : size === '2' ? '2' : size === '3' ? '3' : '4';
  const hasValue = !!value;
  const displayValue = value?.label ?? placeholder ?? '';

  // Get colors based on variant (matching web)
  const gray = colors.palettes.gray;
  const palette = colors.palettes[color ?? 'gray'];

  // Text colors per variant:
  // - surface: gray-12, placeholder: gray-a10, disabled: gray-a8
  // - soft/ghost: accent-12, placeholder: accent-12 @ 0.6 opacity, disabled: gray-a8
  let textColor: string;
  if (disabled) {
    textColor = gray.a8;
  } else if (variant === 'surface') {
    textColor = hasValue ? gray['12'] : gray.a10;
  } else {
    // soft or ghost - use accent color
    textColor = palette['12'] || palette.a12;
  }

  return (
    <Text
      size={textSize}
      color="gray"
      style={{
        color: textColor,
        opacity: !disabled && !hasValue && (variant === 'soft' || variant === 'ghost') ? 0.6 : 1,
      }}
      numberOfLines={1}
      ellipsizeMode="tail"
      {...props}>
      {displayValue}
    </Text>
  );
}

// ============================================================================
// Select.Trigger
// ============================================================================

type SelectTriggerProps = Omit<SelectPrimitive.TriggerProps, 'asChild'> & {
  variant?: SelectTriggerVariant;
  color?: Color;
  style?: StyleProp<ViewStyle>;
};

function SelectTrigger({
  variant = 'surface',
  color = 'gray',
  style,
  disabled,
  children,
  ...props
}: SelectTriggerProps) {
  const { size, open } = React.useContext(SelectContext);
  const { colors } = useThemeTokens();
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const gray = colors.palettes.gray;
  const palette = colors.palettes[color ?? 'gray'];

  // When select is open, apply pressed styles (matching web [data-state='open'])
  const isPressed = pressed || open;

  const sizeStyle = getButtonSizeStyle(size);
  const variantStyle = getButtonVariantStyle(
    variant as ButtonVariant,
    colors,
    palette,
    gray,
    disabled ?? false,
    isPressed,
    hovered
  );
  const shadowStyle = getButtonShadowStyle(variant as ButtonVariant, disabled ?? false, isPressed);
  const focusStyle = getButtonFocusStyle(palette, focused, disabled ?? false);
  const pressedFilter = getButtonPressedFilter(
    variant as ButtonVariant,
    isPressed,
    disabled ?? false
  );

  // Get icon size based on select size
  const iconSize = size === '1' ? 8 : size === '2' ? 10 : size === '3' ? 12 : 14;

  // Icon color matches text color (uses currentColor on web)
  // - surface: gray-12, disabled: gray-a8
  // - soft/ghost: accent-12, disabled: gray-a8
  const iconColor = disabled
    ? gray.a8
    : variant === 'surface'
      ? gray['12']
      : palette['12'] || palette.a12;

  // Context value for SelectValue to access variant/color
  const triggerContextValue = React.useMemo(
    () => ({ variant, color, disabled: disabled ?? false }),
    [variant, color, disabled]
  );

  const triggerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...sizeStyle,
    ...variantStyle,
    ...shadowStyle,
    ...focusStyle,
    ...pressedFilter,
    gap: sizeStyle.gap,
    ...Platform.select({
      web: {
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      } as unknown as ViewStyle,
    }),
  };

  const chevronContainer: ViewStyle = {
    width: iconSize,
    height: iconSize,
    opacity: variant === 'ghost' ? 1 : 0.9,
    marginBottom: size === '2' || size === '3' || size === '4' ? (size === '2' ? -1 : -2) : 0,
  };

  const renderTriggerContent = () => (
    <>
      {typeof children === 'function'
        ? children({ pressed, hovered } as Parameters<typeof children>[0] & { hovered: boolean })
        : children}
      <View style={chevronContainer}>
        <SelectChevronIcon size={iconSize} color={iconColor} />
      </View>
    </>
  );

  // On web, use View instead of Pressable to avoid touch event conflicts
  // Pressable's touch handling interferes with Radix's onClick on mobile web
  if (Platform.OS === 'web') {
    // Web-only props that aren't in RN's ViewProps
    const webProps = {
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setPressed(false);
      },
      onFocus: (e: React.FocusEvent) => {
        if ((e.target as HTMLElement)?.matches?.(':focus-visible')) {
          setFocused(true);
        }
      },
      onBlur: () => setFocused(false),
      tabIndex: disabled ? -1 : 0,
      role: 'combobox',
      'aria-disabled': disabled,
    } as unknown as ViewStyle;

    return (
      <SelectTriggerContext.Provider value={triggerContextValue}>
        <SelectPrimitive.Trigger asChild disabled={disabled} {...props}>
          <View style={[triggerStyle, style]} {...webProps}>
            {renderTriggerContent()}
          </View>
        </SelectPrimitive.Trigger>
      </SelectTriggerContext.Provider>
    );
  }

  // On native, use Pressable for proper touch handling
  return (
    <SelectTriggerContext.Provider value={triggerContextValue}>
      <SelectPrimitive.Trigger asChild disabled={disabled} {...props}>
        <Pressable
          onPressIn={(e) => {
            setPressed(true);
            props.onPressIn?.(e);
          }}
          onPressOut={(e) => {
            setPressed(false);
            props.onPressOut?.(e);
          }}
          onFocus={(e) => {
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          onHoverIn={(e) => {
            setHovered(true);
            props.onHoverIn?.(e);
          }}
          onHoverOut={(e) => {
            setHovered(false);
            props.onHoverOut?.(e);
          }}
          style={[triggerStyle, style]}
          disabled={disabled}>
          {renderTriggerContent()}
        </Pressable>
      </SelectPrimitive.Trigger>
    </SelectTriggerContext.Provider>
  );
}

// ============================================================================
// Select.Content
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

type SelectContentProps = SelectPrimitive.ContentProps & {
  portalHost?: string;
  position?: 'popper' | 'item-aligned';
};

function SelectContent({ portalHost, position = 'popper', ...props }: SelectContentProps) {
  // Get context values before portal (context is lost in portal on native)
  const selectContext = React.useContext(SelectContext);
  const { size, labelMap, value, open } = selectContext;
  const { colors, isDark } = useThemeTokens();
  const { height: windowHeight } = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();

  // ScrollView ref and item positions for scroll-to-selected on native
  const scrollViewRef = React.useRef<ScrollView>(null);
  const itemPositionsRef = React.useRef<Map<string, number>>(new Map());
  const hasScrolledRef = React.useRef(false);

  // Content padding based on size
  const contentPadding = size === '1' ? 4 : size === '2' ? 4 : size === '3' ? 4 : 4;

  // Border radius based on size
  const borderRadius = size === '1' ? 8 : size === '2' ? 10 : size === '3' ? 12 : 14;

  // Calculate available height for native - account for safe areas and some padding
  // Leave extra space for trigger (~60px) and visual breathing room (~40px)
  const nativeMaxHeight = Math.max(
    150,
    windowHeight - safeAreaInsets.top - safeAreaInsets.bottom - 100
  );

  // Insets for the primitive's collision detection
  const contentInsets = {
    top: safeAreaInsets.top + 8,
    bottom: safeAreaInsets.bottom + 8,
    left: safeAreaInsets.left + 8,
    right: safeAreaInsets.right + 8,
  };

  // Register item position callback for native scroll-to-selected
  const registerItemPosition = React.useCallback(
    (itemValue: string, y: number) => {
      itemPositionsRef.current.set(itemValue, y);

      // Scroll to selected item once positions are registered (native only)
      if (Platform.OS !== 'web' && !hasScrolledRef.current && value?.value === itemValue) {
        hasScrolledRef.current = true;
        // Use requestAnimationFrame to ensure ScrollView is mounted
        requestAnimationFrame(() => {
          scrollViewRef.current?.scrollTo({ y, animated: false });
        });
      }
    },
    [value?.value]
  );

  // Reset scroll flag when content closes
  React.useEffect(() => {
    if (!open) {
      hasScrolledRef.current = false;
    }
  }, [open]);

  // Content context value for item position registration
  const contentContextValue = React.useMemo(
    () => ({ registerItemPosition }),
    [registerItemPosition]
  );

  // Re-create context value to provide inside portal
  const contextValue = React.useMemo(
    () => ({ size, labelMap, value, open }),
    [size, labelMap, value, open]
  );

  return (
    <SelectPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        <SelectPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
          {/* Re-provide context inside portal since it's lost on native */}
          <SelectContext.Provider value={contextValue}>
            <SelectContentContext.Provider value={contentContextValue}>
              <TextStyleContext.Provider value={{ size: '2', weight: 'regular', color: 'gray' }}>
                <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
                  <SelectPrimitive.Content
                    position={position}
                    sideOffset={4}
                    insets={Platform.OS !== 'web' ? contentInsets : undefined}
                    style={{
                      backgroundColor: colors.panelSolid,
                      borderRadius,
                      minWidth: 128,
                      // Constrain max height on native to prevent overflow
                      ...Platform.select({
                        web: {
                          // Shadow-5 from web: border + two shadow layers
                          // Light: 0 0 0 1px gray-a5, 0 12px 60px black-a3, 0 12px 32px -16px gray-a5
                          // Dark: 0 0 0 1px gray-a6, 0 12px 60px black-a5, 0 12px 32px -16px black-a7
                          boxShadow: isDark
                            ? `0 0 0 1px ${colors.palettes.gray.a6}, 0 12px 60px ${colors.palettes.black.a5}, 0 12px 32px -16px ${colors.palettes.black.a7}`
                            : `0 0 0 1px ${colors.palettes.gray.a5}, 0 12px 60px ${colors.palettes.black.a3}, 0 12px 32px -16px ${colors.palettes.gray.a5}`,
                          overflow: 'hidden',
                        },
                        default: {
                          // Native approximation - can't do multiple shadows
                          // Note: overflow: 'hidden' clips shadows on iOS, so we don't use it here
                          maxHeight: nativeMaxHeight,
                          borderWidth: 1,
                          borderColor: isDark ? colors.palettes.gray.a6 : colors.palettes.gray.a5,
                          shadowColor: '#000000',
                          shadowOpacity: isDark ? 0.3 : 0.15,
                          shadowOffset: { width: 0, height: 12 },
                          shadowRadius: 30,
                          elevation: 12,
                        },
                      }),
                    }}
                    {...props}>
                    <SelectPrimitive.Viewport
                      style={{
                        width: 'auto',
                        borderRadius,
                        // On web, Radix calculates available height dynamically via CSS variable
                        ...Platform.select({
                          web: {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- CSS variable not in ViewStyle type
                            maxHeight:
                              'var(--radix-select-content-available-height)' as unknown as number,
                            overflow: 'auto',
                          },
                          default: {
                            overflow: 'hidden',
                          },
                        }),
                      }}>
                      {Platform.OS === 'web' ? (
                        <View style={{ padding: contentPadding }}>{props.children}</View>
                      ) : (
                        <ScrollView
                          ref={scrollViewRef}
                          style={{ maxHeight: nativeMaxHeight - contentPadding * 2 - 2 }} // Account for padding and border
                          contentContainerStyle={{ padding: contentPadding }}
                          showsVerticalScrollIndicator
                          bounces={false}>
                          {props.children}
                        </ScrollView>
                      )}
                    </SelectPrimitive.Viewport>
                  </SelectPrimitive.Content>
                </NativeOnlyAnimatedView>
              </TextStyleContext.Provider>
            </SelectContentContext.Provider>
          </SelectContext.Provider>
        </SelectPrimitive.Overlay>
      </FullWindowOverlay>
    </SelectPrimitive.Portal>
  );
}

// ============================================================================
// Select.Item
// ============================================================================

type SelectItemProps = Omit<SelectPrimitive.ItemProps, 'value' | 'children'> & {
  value: string;
  label: string;
  children: React.ReactNode;
};

function SelectItem({ children, disabled, label, value, ...props }: SelectItemProps) {
  const { size, labelMap } = React.useContext(SelectContext);
  const { registerItemPosition } = React.useContext(SelectContentContext);
  const { colors } = useThemeTokens();
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  // Register label in the map when component mounts/updates
  React.useEffect(() => {
    labelMap.current.set(value, label);
    return () => {
      labelMap.current.delete(value);
    };
  }, [value, label, labelMap]);

  // Register item position for native scroll-to-selected
  const handleLayout = React.useCallback(
    (e: { nativeEvent: { layout: { y: number } } }) => {
      if (Platform.OS !== 'web') {
        registerItemPosition(value, e.nativeEvent.layout.y);
      }
    },
    [value, registerItemPosition]
  );

  // Calculate sizes based on context size - memoize to ensure updates
  const itemStyles = React.useMemo(() => {
    const itemHeight = size === '1' ? 24 : size === '2' ? 32 : size === '3' ? 40 : 48;
    const itemIndicatorWidth = itemHeight / 1.2;
    const borderRadius = size === '1' ? 4 : size === '2' ? 6 : size === '3' ? 8 : 10;
    return { itemHeight, itemIndicatorWidth, borderRadius };
  }, [size]);

  // Extract colors from theme - these will update when theme changes
  const highlightColor = colors.palettes.gray.a4;
  const textColor = disabled ? colors.palettes.gray.a8 : colors.palettes.gray['12'];

  // Use gray background for hover, press, and keyboard focus
  const isHighlighted = hovered || pressed || focused;

  // Memoize style to include current theme colors
  const itemStyle = React.useMemo<ViewStyle>(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      height: itemStyles.itemHeight,
      paddingLeft: itemStyles.itemIndicatorWidth,
      paddingRight: itemStyles.itemIndicatorWidth,
      position: 'relative',
      borderRadius: itemStyles.borderRadius,
      backgroundColor: isHighlighted ? highlightColor : undefined,
      ...Platform.select({
        web: {
          cursor: disabled ? 'not-allowed' : 'default',
          userSelect: 'none',
          outline: 'none',
        } as unknown as ViewStyle,
      }),
    }),
    [itemStyles, isHighlighted, highlightColor, disabled]
  );

  // Handle focus - only track keyboard focus (focus-visible) on web
  const handleFocus = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- cross-platform event type
    (e: any) => {
      if (Platform.OS === 'web') {
        const target = e.target as HTMLElement | undefined;
        if (target?.matches?.(':focus-visible')) {
          setFocused(true);
        }
      }
      props.onFocus?.(e);
    },
    [props.onFocus]
  );

  const handleBlur = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- cross-platform event type
    (e: any) => {
      setFocused(false);
      props.onBlur?.(e);
    },
    [props.onBlur]
  );

  // Web-specific hover handlers using native DOM events (more reliable after re-renders)
  const webHoverProps =
    Platform.OS === 'web'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <SelectPrimitive.Item
      disabled={disabled}
      value={value}
      label={label}
      onLayout={handleLayout}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <SelectPrimitive.ItemIndicator
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: itemStyles.itemHeight,
          width: itemStyles.itemIndicatorWidth,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SelectCheckIcon
          size={size === '1' ? 8 : size === '2' ? 10 : size === '3' ? 12 : 14}
          color={textColor}
        />
      </SelectPrimitive.ItemIndicator>
      <View style={{ justifyContent: 'center', minHeight: itemStyles.itemHeight }}>
        <Text
          size={size === '1' ? '1' : size === '2' ? '2' : size === '3' ? '3' : '4'}
          color="gray"
          style={{
            color: textColor,
            ...(Platform.OS === 'web' ? { whiteSpace: 'nowrap' } : {}),
          }}>
          {children}
        </Text>
      </View>
    </SelectPrimitive.Item>
  );
}

// ============================================================================
// Select.Label
// ============================================================================

type SelectLabelProps = SelectPrimitive.LabelProps;

function SelectLabel({ children, ...props }: SelectLabelProps) {
  const { size } = React.useContext(SelectContext);
  const { colors } = useThemeTokens();

  const itemHeight = size === '1' ? 24 : size === '2' ? 32 : size === '3' ? 40 : 48;
  const itemIndicatorWidth = itemHeight / 1.2;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: itemHeight,
        paddingLeft: itemIndicatorWidth,
        paddingRight: itemIndicatorWidth,
        ...Platform.select({
          web: {
            cursor: 'default',
            userSelect: 'none',
          } as unknown as ViewStyle,
        }),
      }}>
      <Text
        size={size === '1' ? '0' : size === '2' ? '1' : size === '3' ? '2' : '3'}
        weight="semi-bold"
        color="gray"
        style={{ color: colors.palettes.gray.a10 }}
        {...props}>
        {children}
      </Text>
    </View>
  );
}

// ============================================================================
// Select.Separator
// ============================================================================

type SelectSeparatorProps = SelectPrimitive.SeparatorProps;

function SelectSeparator({ ...props }: SelectSeparatorProps) {
  const { size } = React.useContext(SelectContext);
  const { colors } = useThemeTokens();

  const contentPadding = size === '1' ? 4 : size === '2' ? 4 : size === '3' ? 4 : 4;

  return (
    <SelectPrimitive.Separator
      style={{
        height: 1,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: -contentPadding + 1,
        marginRight: -contentPadding + 1,
        backgroundColor: colors.palettes.gray.a6,
        ...Platform.select({
          web: {
            pointerEvents: 'none',
          },
        }),
      }}
      {...props}
    />
  );
}

// ============================================================================
// Select.Group
// ============================================================================

const SelectGroup: typeof SelectPrimitive.Group = SelectPrimitive.Group;

// ============================================================================
// Export composite component
// ============================================================================

const Select: {
  Root: typeof SelectRoot;
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Label: typeof SelectLabel;
  Separator: typeof SelectSeparator;
  Group: typeof SelectGroup;
} = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
  Separator: SelectSeparator,
  Group: SelectGroup,
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
export type {
  SelectContentProps,
  SelectItemProps,
  SelectLabelProps,
  SelectRootProps,
  SelectSeparatorProps,
  SelectSize,
  SelectTriggerProps,
  SelectTriggerVariant,
  SelectValueProps,
};
