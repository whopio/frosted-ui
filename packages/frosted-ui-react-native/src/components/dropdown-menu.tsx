import { NativeOnlyAnimatedView } from '@/components/native-only-animated-view';
import { Text, TextStyleContext, type TextSize } from '@/components/text';
import { DropdownMenuPrimitive } from '@/forked-primitives';
import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  type ViewStyle,
} from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';
import Svg, { Path } from 'react-native-svg';

// ============================================================================
// Custom icons matching web version
// ============================================================================

function DropdownMenuCheckIcon({ size, color }: { size: number; color: string }) {
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

function DropdownMenuChevronRightIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill="none" stroke={color} strokeWidth={1.5}>
      <Path d="M3 1.5L6 4.5L3 7.5" />
    </Svg>
  );
}

// ============================================================================
// Types
// ============================================================================

type DropdownMenuSize = '1' | '2' | '3';
type DropdownMenuVariant = 'solid' | 'soft';

// ============================================================================
// Context
// ============================================================================

type DropdownMenuContextValue = {
  size: DropdownMenuSize;
  variant: DropdownMenuVariant;
  color?: Color;
  hasIndicators?: boolean; // When true, all items get extra left padding to align with checkbox/radio indicators
};

const DropdownMenuContext = React.createContext<DropdownMenuContextValue>({
  size: '2',
  variant: 'solid',
  hasIndicators: false,
});

// ============================================================================
// Size/Style helpers (similar to Select)
// ============================================================================

function getMenuSizeStyles(size: DropdownMenuSize) {
  return {
    contentPadding: 4, // --space-1
    contentBorderRadius: size === '1' ? 8 : size === '2' ? 10 : 12,
    itemHeight: size === '1' ? 24 : size === '2' ? 32 : 40,
    itemPaddingLeft: size === '1' ? 8 : size === '2' ? 10 : 12,
    itemPaddingRight: size === '1' ? 8 : size === '2' ? 10 : 12,
    itemBorderRadius: size === '1' ? 4 : size === '2' ? 6 : 8,
    // For checkbox/radio items, use larger left padding
    itemIndicatorPaddingLeft: size === '1' ? 24 : size === '2' ? 26 : 28,
    iconSize: size === '1' ? 8 : size === '2' ? 10 : 12,
    itemFontSize: size === '1' ? '1' : size === '2' ? '2' : '3',
    labelFontSize: size === '1' ? '0' : size === '2' ? '1' : '2',
  } as const;
}

// ============================================================================
// DropdownMenu.Root
// ============================================================================

type DropdownMenuRootProps = DropdownMenuPrimitive.RootProps & {
  size?: DropdownMenuSize;
  variant?: DropdownMenuVariant;
  color?: Color;
};

function DropdownMenuRoot({
  size = '2',
  variant = 'solid',
  color,
  ...props
}: DropdownMenuRootProps) {
  const contextValue = React.useMemo(() => ({ size, variant, color }), [size, variant, color]);

  return (
    <DropdownMenuContext.Provider value={contextValue}>
      <DropdownMenuPrimitive.Root {...props} />
    </DropdownMenuContext.Provider>
  );
}

// ============================================================================
// DropdownMenu.Trigger
// ============================================================================

type DropdownMenuTriggerProps = DropdownMenuPrimitive.TriggerProps;

function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger {...props} />;
}

// ============================================================================
// DropdownMenu.Content
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

type DropdownMenuContentProps = Omit<DropdownMenuPrimitive.ContentProps, 'children'> & {
  portalHost?: string;
  children?: React.ReactNode;
};

// Helper to safely get primitive context on native (not available on web)
function useDropdownMenuRootContext() {
  if (Platform.OS === 'web' || !DropdownMenuPrimitive.useRootContext) {
    return null;
  }
  return DropdownMenuPrimitive.useRootContext();
}

function DropdownMenuContent({ portalHost, children, ...props }: DropdownMenuContentProps) {
  const { size, variant, color } = React.useContext(DropdownMenuContext);
  const { colors, isDark } = useThemeTokens();
  const { height: windowHeight } = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();

  // Capture primitive context BEFORE the portal/FullWindowOverlay (native only)
  const primitiveContext = useDropdownMenuRootContext();

  const sizeStyles = getMenuSizeStyles(size);

  // Calculate available height for native
  const nativeMaxHeight = Math.max(
    150,
    windowHeight - safeAreaInsets.top - safeAreaInsets.bottom - 100
  );

  // Insets for collision detection
  const contentInsets = {
    top: safeAreaInsets.top + 8,
    bottom: safeAreaInsets.bottom + 8,
    left: safeAreaInsets.left + 8,
    right: safeAreaInsets.right + 8,
  };

  // Detect if content has checkbox or radio items to adjust padding for all items
  const hasIndicators = React.useMemo(() => {
    let found = false;
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (
          child.type === DropdownMenuCheckboxItem ||
          child.type === DropdownMenuRadioItem ||
          child.type === DropdownMenuRadioGroup
        ) {
          found = true;
        }
      }
    });
    return found;
  }, [children]);

  // Re-provide context inside portal with hasIndicators
  const contextValue = React.useMemo(
    () => ({ size, variant, color, hasIndicators }),
    [size, variant, color, hasIndicators]
  );

  const backgroundColor = variant === 'solid' ? colors.panelSolid : colors.panelTranslucent;

  // On native, re-provide context after FullWindowOverlay breaks it
  const ContextProvider =
    Platform.OS !== 'web' ? DropdownMenuPrimitive.DropdownMenuContext?.Provider : null;
  const shouldProvideContext = ContextProvider && primitiveContext;

  const content = (
    <DropdownMenuPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
      <DropdownMenuContext.Provider value={contextValue}>
        <TextStyleContext.Provider value={{ size: '2', weight: 'regular', color: 'gray' }}>
          <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
            <DropdownMenuPrimitive.Content
              align="start"
              sideOffset={4}
              insets={Platform.OS !== 'web' ? contentInsets : undefined}
              style={{
                backgroundColor,
                borderRadius: sizeStyles.contentBorderRadius,
                minWidth: 128,
                ...Platform.select({
                  web: {
                    boxShadow: isDark
                      ? `0 0 0 1px ${colors.palettes.gray.a6}, 0 12px 60px ${colors.palettes.black.a5}, 0 12px 32px -16px ${colors.palettes.black.a7}`
                      : `0 0 0 1px ${colors.palettes.gray.a5}, 0 12px 60px ${colors.palettes.black.a3}, 0 12px 32px -16px ${colors.palettes.gray.a5}`,
                    backdropFilter:
                      variant === 'soft'
                        ? 'saturate(1.8) blur(20px) contrast(1.05) brightness(1.05)'
                        : undefined,
                    overflow: 'hidden',
                  },
                  default: {
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
              {Platform.OS === 'web' ? (
                <View
                  style={
                    {
                      padding: sizeStyles.contentPadding,
                      maxHeight: 'var(--radix-dropdown-menu-content-available-height)',
                      overflow: 'auto',
                    } as unknown as ViewStyle
                  }>
                  {children}
                </View>
              ) : (
                <ScrollView
                  style={{ maxHeight: nativeMaxHeight - sizeStyles.contentPadding * 2 - 2 }}
                  contentContainerStyle={{ padding: sizeStyles.contentPadding }}
                  showsVerticalScrollIndicator
                  bounces={false}>
                  {children}
                </ScrollView>
              )}
            </DropdownMenuPrimitive.Content>
          </NativeOnlyAnimatedView>
        </TextStyleContext.Provider>
      </DropdownMenuContext.Provider>
    </DropdownMenuPrimitive.Overlay>
  );

  return (
    <DropdownMenuPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        {shouldProvideContext ? (
          <ContextProvider value={primitiveContext}>{content}</ContextProvider>
        ) : (
          content
        )}
      </FullWindowOverlay>
    </DropdownMenuPrimitive.Portal>
  );
}

// ============================================================================
// DropdownMenu.Item
// ============================================================================

type DropdownMenuItemProps = Omit<DropdownMenuPrimitive.ItemProps, 'children'> & {
  color?: Color;
  children?: React.ReactNode;
};

function DropdownMenuItem({ children, disabled, color, ...props }: DropdownMenuItemProps) {
  const { size, hasIndicators } = React.useContext(DropdownMenuContext);
  const { colors } = useThemeTokens();
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const sizeStyles = getMenuSizeStyles(size);

  // Resolve accent color for colored items (like danger -> red)
  const resolvedColor =
    color === 'danger'
      ? 'red'
      : color === 'success'
        ? 'green'
        : color === 'warning'
          ? 'yellow'
          : color === 'info'
            ? 'blue'
            : color;
  const accentPalette = resolvedColor
    ? colors.palettes[resolvedColor as keyof typeof colors.palettes] || colors.palettes.gray
    : null;
  const isHighlighted = hovered || pressed;

  // Background color on highlight
  const highlightBg = accentPalette ? accentPalette.a5 : colors.palettes.gray.a4;

  // Text color
  const textColor = disabled
    ? colors.palettes.gray.a8
    : accentPalette
      ? isHighlighted
        ? ((accentPalette as { '12'?: string; a11?: string })['12'] ?? accentPalette.a11)
        : accentPalette.a11
      : colors.palettes.gray['12'];

  // Use indicator padding when menu has checkbox/radio items
  const paddingLeft = hasIndicators
    ? sizeStyles.itemIndicatorPaddingLeft
    : sizeStyles.itemPaddingLeft;

  const itemStyle = React.useMemo<ViewStyle>(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: sizeStyles.itemHeight,
      paddingLeft,
      paddingRight: sizeStyles.itemPaddingRight,
      borderRadius: sizeStyles.itemBorderRadius,
      backgroundColor: isHighlighted ? highlightBg : undefined,
      ...Platform.select({
        web: {
          cursor: disabled ? 'not-allowed' : 'default',
          userSelect: 'none',
          outline: 'none',
        } as unknown as ViewStyle,
      }),
    }),
    [sizeStyles, paddingLeft, isHighlighted, highlightBg, disabled]
  );

  // Web-specific hover handlers
  const webHoverProps =
    Platform.OS === 'web'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <DropdownMenuPrimitive.Item
      disabled={disabled}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <Text size={sizeStyles.itemFontSize as TextSize} style={{ color: textColor }}>
        {children}
      </Text>
    </DropdownMenuPrimitive.Item>
  );
}

// ============================================================================
// DropdownMenu.CheckboxItem
// ============================================================================

type DropdownMenuCheckboxItemProps = Omit<DropdownMenuPrimitive.CheckboxItemProps, 'children'> & {
  children?: React.ReactNode;
};

function DropdownMenuCheckboxItem({ children, disabled, ...props }: DropdownMenuCheckboxItemProps) {
  const { size } = React.useContext(DropdownMenuContext);
  const { colors } = useThemeTokens();
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const sizeStyles = getMenuSizeStyles(size);
  const isHighlighted = hovered || pressed;
  const highlightBg = colors.palettes.gray.a4;
  const textColor = disabled ? colors.palettes.gray.a8 : colors.palettes.gray['12'];

  const itemStyle = React.useMemo<ViewStyle>(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      height: sizeStyles.itemHeight,
      paddingLeft: sizeStyles.itemIndicatorPaddingLeft,
      paddingRight: sizeStyles.itemPaddingRight,
      borderRadius: sizeStyles.itemBorderRadius,
      backgroundColor: isHighlighted ? highlightBg : undefined,
      position: 'relative',
      ...Platform.select({
        web: {
          cursor: disabled ? 'not-allowed' : 'default',
          userSelect: 'none',
          outline: 'none',
        } as unknown as ViewStyle,
      }),
    }),
    [sizeStyles, isHighlighted, highlightBg, disabled]
  );

  const webHoverProps =
    Platform.OS === 'web'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <DropdownMenuPrimitive.CheckboxItem
      disabled={disabled}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <DropdownMenuPrimitive.ItemIndicator
        style={{
          position: 'absolute',
          left: 0,
          width: sizeStyles.itemIndicatorPaddingLeft,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DropdownMenuCheckIcon size={sizeStyles.iconSize} color={textColor} />
      </DropdownMenuPrimitive.ItemIndicator>
      <Text size={sizeStyles.itemFontSize as TextSize} style={{ color: textColor }}>
        {children}
      </Text>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

// ============================================================================
// DropdownMenu.RadioGroup
// ============================================================================

type DropdownMenuRadioGroupProps = DropdownMenuPrimitive.RadioGroupProps;

function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />;
}

// ============================================================================
// DropdownMenu.RadioItem
// ============================================================================

type DropdownMenuRadioItemProps = Omit<DropdownMenuPrimitive.RadioItemProps, 'children'> & {
  children?: React.ReactNode;
};

function DropdownMenuRadioItem({ children, disabled, ...props }: DropdownMenuRadioItemProps) {
  const { size } = React.useContext(DropdownMenuContext);
  const { colors } = useThemeTokens();
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const sizeStyles = getMenuSizeStyles(size);
  const isHighlighted = hovered || pressed;
  const highlightBg = colors.palettes.gray.a4;
  const textColor = disabled ? colors.palettes.gray.a8 : colors.palettes.gray['12'];

  const itemStyle = React.useMemo<ViewStyle>(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      height: sizeStyles.itemHeight,
      paddingLeft: sizeStyles.itemIndicatorPaddingLeft,
      paddingRight: sizeStyles.itemPaddingRight,
      borderRadius: sizeStyles.itemBorderRadius,
      backgroundColor: isHighlighted ? highlightBg : undefined,
      position: 'relative',
      ...Platform.select({
        web: {
          cursor: disabled ? 'not-allowed' : 'default',
          userSelect: 'none',
          outline: 'none',
        } as unknown as ViewStyle,
      }),
    }),
    [sizeStyles, isHighlighted, highlightBg, disabled]
  );

  const webHoverProps =
    Platform.OS === 'web'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <DropdownMenuPrimitive.RadioItem
      disabled={disabled}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <DropdownMenuPrimitive.ItemIndicator
        style={{
          position: 'absolute',
          left: 0,
          width: sizeStyles.itemIndicatorPaddingLeft,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DropdownMenuCheckIcon size={sizeStyles.iconSize} color={textColor} />
      </DropdownMenuPrimitive.ItemIndicator>
      <Text size={sizeStyles.itemFontSize as TextSize} style={{ color: textColor }}>
        {children}
      </Text>
    </DropdownMenuPrimitive.RadioItem>
  );
}

// ============================================================================
// DropdownMenu.Label
// ============================================================================

type DropdownMenuLabelProps = DropdownMenuPrimitive.LabelProps;

function DropdownMenuLabel({ children, ...props }: DropdownMenuLabelProps) {
  const { size, hasIndicators } = React.useContext(DropdownMenuContext);
  const { colors } = useThemeTokens();

  const sizeStyles = getMenuSizeStyles(size);

  // Use indicator padding when menu has checkbox/radio items
  const paddingLeft = hasIndicators
    ? sizeStyles.itemIndicatorPaddingLeft
    : sizeStyles.itemPaddingLeft;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: sizeStyles.itemHeight,
        paddingLeft,
        paddingRight: sizeStyles.itemPaddingRight,
        ...Platform.select({
          web: {
            cursor: 'default',
            userSelect: 'none',
          } as unknown as ViewStyle,
        }),
      }}>
      <Text
        size={sizeStyles.labelFontSize as TextSize}
        weight="semi-bold"
        style={{ color: colors.palettes.gray.a10 }}
        {...props}>
        {children}
      </Text>
    </View>
  );
}

// ============================================================================
// DropdownMenu.Separator
// ============================================================================

type DropdownMenuSeparatorProps = DropdownMenuPrimitive.SeparatorProps;

function DropdownMenuSeparator(props: DropdownMenuSeparatorProps) {
  const { size } = React.useContext(DropdownMenuContext);
  const { colors } = useThemeTokens();

  const sizeStyles = getMenuSizeStyles(size);

  return (
    <DropdownMenuPrimitive.Separator
      style={{
        height: 1,
        backgroundColor: colors.palettes.gray.a6,
        marginVertical: 4,
        marginHorizontal: -sizeStyles.contentPadding + 1,
      }}
      {...props}
    />
  );
}

// ============================================================================
// DropdownMenu.Group
// ============================================================================

type DropdownMenuGroupProps = DropdownMenuPrimitive.GroupProps;

function DropdownMenuGroup(props: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group {...props} />;
}

// ============================================================================
// DropdownMenu.Sub
// ============================================================================

type DropdownMenuSubProps = DropdownMenuPrimitive.SubProps;

function DropdownMenuSub(props: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub {...props} />;
}

// ============================================================================
// DropdownMenu.SubTrigger
// ============================================================================

type DropdownMenuSubTriggerProps = Omit<DropdownMenuPrimitive.SubTriggerProps, 'children'> & {
  children?: React.ReactNode;
};

function DropdownMenuSubTrigger({ children, disabled, ...props }: DropdownMenuSubTriggerProps) {
  const { size, hasIndicators } = React.useContext(DropdownMenuContext);
  const { colors } = useThemeTokens();
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const sizeStyles = getMenuSizeStyles(size);
  const isHighlighted = hovered || pressed;
  const highlightBg = colors.palettes.gray.a4;
  const textColor = disabled ? colors.palettes.gray.a8 : colors.palettes.gray['12'];

  // Use indicator padding when menu has checkbox/radio items
  const paddingLeft = hasIndicators
    ? sizeStyles.itemIndicatorPaddingLeft
    : sizeStyles.itemPaddingLeft;

  const itemStyle = React.useMemo<ViewStyle>(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: sizeStyles.itemHeight,
      paddingLeft,
      paddingRight: sizeStyles.itemPaddingRight,
      borderRadius: sizeStyles.itemBorderRadius,
      backgroundColor: isHighlighted ? highlightBg : undefined,
      ...Platform.select({
        web: {
          cursor: disabled ? 'not-allowed' : 'default',
          userSelect: 'none',
          outline: 'none',
        } as unknown as ViewStyle,
      }),
    }),
    [sizeStyles, paddingLeft, isHighlighted, highlightBg, disabled]
  );

  const webHoverProps =
    Platform.OS === 'web'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <DropdownMenuPrimitive.SubTrigger
      disabled={disabled}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <Text size={sizeStyles.itemFontSize as TextSize} style={{ color: textColor }}>
        {children}
      </Text>
      <DropdownMenuChevronRightIcon size={sizeStyles.iconSize} color={textColor} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

// ============================================================================
// DropdownMenu.SubContent
// ============================================================================

type DropdownMenuSubContentProps = DropdownMenuPrimitive.SubContentProps;

function DropdownMenuSubContent(props: DropdownMenuSubContentProps) {
  const { size, variant } = React.useContext(DropdownMenuContext);
  const { colors, isDark } = useThemeTokens();

  const sizeStyles = getMenuSizeStyles(size);
  const backgroundColor = variant === 'solid' ? colors.panelSolid : colors.panelTranslucent;

  return (
    <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
      <DropdownMenuPrimitive.SubContent
        style={{
          backgroundColor,
          borderRadius: sizeStyles.contentBorderRadius,
          minWidth: 128,
          padding: sizeStyles.contentPadding,
          ...Platform.select({
            web: {
              boxShadow: isDark
                ? `0 0 0 1px ${colors.palettes.gray.a6}, 0 12px 60px ${colors.palettes.black.a5}, 0 12px 32px -16px ${colors.palettes.black.a7}`
                : `0 0 0 1px ${colors.palettes.gray.a5}, 0 12px 60px ${colors.palettes.black.a3}, 0 12px 32px -16px ${colors.palettes.gray.a5}`,
              backdropFilter:
                variant === 'soft'
                  ? 'saturate(1.8) blur(20px) contrast(1.05) brightness(1.05)'
                  : undefined,
              overflow: 'hidden',
            },
            default: {
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
        {...props}
      />
    </NativeOnlyAnimatedView>
  );
}

// ============================================================================
// Exports
// ============================================================================

const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Group: DropdownMenuGroup,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
};

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
};

  export type {
    DropdownMenuCheckboxItemProps,
    DropdownMenuContentProps,
    DropdownMenuGroupProps,
    DropdownMenuItemProps,
    DropdownMenuLabelProps,
    DropdownMenuRadioGroupProps,
    DropdownMenuRadioItemProps,
    DropdownMenuRootProps,
    DropdownMenuSeparatorProps,
    DropdownMenuSize,
    DropdownMenuSubContentProps,
    DropdownMenuSubProps,
    DropdownMenuSubTriggerProps,
    DropdownMenuTriggerProps,
    DropdownMenuVariant
  };

