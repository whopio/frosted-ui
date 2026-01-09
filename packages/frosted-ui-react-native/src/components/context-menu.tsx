import { NativeOnlyAnimatedView } from '@/components/native-only-animated-view';
import { Text, TextStyleContext, type TextSize } from '@/components/text';
import { ContextMenuPrimitive } from '@/forked-primitives';
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

function ContextMenuCheckIcon({ size, color }: { size: number; color: string }) {
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

function ContextMenuChevronRightIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill="none" stroke={color} strokeWidth={1.5}>
      <Path d="M3 1.5L6 4.5L3 7.5" />
    </Svg>
  );
}

// ============================================================================
// Types
// ============================================================================

type ContextMenuSize = '1' | '2' | '3';
type ContextMenuVariant = 'solid' | 'soft';

// ============================================================================
// Context
// ============================================================================

type ContextMenuContextValue = {
  size: ContextMenuSize;
  variant: ContextMenuVariant;
  color?: Color;
  hasIndicators?: boolean; // When true, all items get extra left padding to align with checkbox/radio indicators
};

const ContextMenuContext = React.createContext<ContextMenuContextValue>({
  size: '2',
  variant: 'solid',
  hasIndicators: false,
});

// ============================================================================
// Size/Style helpers (same as DropdownMenu)
// ============================================================================

function getMenuSizeStyles(size: ContextMenuSize) {
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
// ContextMenu.Root
// ============================================================================

type ContextMenuRootProps = ContextMenuPrimitive.RootProps & {
  size?: ContextMenuSize;
  variant?: ContextMenuVariant;
  color?: Color;
};

function ContextMenuRoot({ size = '2', variant = 'solid', color, ...props }: ContextMenuRootProps) {
  const contextValue = React.useMemo(() => ({ size, variant, color }), [size, variant, color]);

  return (
    <ContextMenuContext.Provider value={contextValue}>
      <ContextMenuPrimitive.Root {...props} />
    </ContextMenuContext.Provider>
  );
}

// ============================================================================
// ContextMenu.Trigger
// ============================================================================

type ContextMenuTriggerProps = ContextMenuPrimitive.TriggerProps;

function ContextMenuTrigger(props: ContextMenuTriggerProps) {
  return <ContextMenuPrimitive.Trigger {...props} />;
}

// ============================================================================
// ContextMenu.Content
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

type ContextMenuContentProps = Omit<ContextMenuPrimitive.ContentProps, 'children'> & {
  portalHost?: string;
  children?: React.ReactNode;
};

// Helper to safely get primitive context on native (not available on web)
function useContextMenuRootContext() {
  if (Platform.OS === 'web' || !ContextMenuPrimitive.useRootContext) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return ContextMenuPrimitive.useRootContext();
}

function ContextMenuContent({ portalHost, children, ...props }: ContextMenuContentProps) {
  const { size, variant, color } = React.useContext(ContextMenuContext);
  const { colors, isDark } = useThemeTokens();

  // Capture primitive context BEFORE the portal/FullWindowOverlay (native only)
  const primitiveContext = useContextMenuRootContext();
  const { height: windowHeight } = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();

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
          child.type === ContextMenuCheckboxItem ||
          child.type === ContextMenuRadioItem ||
          child.type === ContextMenuRadioGroup
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
  const ContextProvider = ContextMenuPrimitive.ContextMenuContext?.Provider;
  const shouldProvideContext = Platform.OS !== 'web' && ContextProvider && primitiveContext;

  const content = (
    <ContextMenuPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
      <ContextMenuContext.Provider value={contextValue}>
        <TextStyleContext.Provider value={{ size: '2', weight: 'regular', color: 'gray' }}>
          <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
            <ContextMenuPrimitive.Content
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
                      maxHeight: 'var(--radix-context-menu-content-available-height)',
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
            </ContextMenuPrimitive.Content>
          </NativeOnlyAnimatedView>
        </TextStyleContext.Provider>
      </ContextMenuContext.Provider>
    </ContextMenuPrimitive.Overlay>
  );

  return (
    <ContextMenuPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        {shouldProvideContext ? (
          <ContextProvider value={primitiveContext}>{content}</ContextProvider>
        ) : (
          content
        )}
      </FullWindowOverlay>
    </ContextMenuPrimitive.Portal>
  );
}

// ============================================================================
// ContextMenu.Item
// ============================================================================

type ContextMenuItemProps = Omit<ContextMenuPrimitive.ItemProps, 'children'> & {
  color?: Color;
  children?: React.ReactNode;
};

function ContextMenuItem({ children, disabled, color, ...props }: ContextMenuItemProps) {
  const { size, hasIndicators } = React.useContext(ContextMenuContext);
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
    <ContextMenuPrimitive.Item
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
    </ContextMenuPrimitive.Item>
  );
}

// ============================================================================
// ContextMenu.CheckboxItem
// ============================================================================

type ContextMenuCheckboxItemProps = Omit<ContextMenuPrimitive.CheckboxItemProps, 'children'> & {
  children?: React.ReactNode;
};

function ContextMenuCheckboxItem({ children, disabled, ...props }: ContextMenuCheckboxItemProps) {
  const { size } = React.useContext(ContextMenuContext);
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
    <ContextMenuPrimitive.CheckboxItem
      disabled={disabled}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <ContextMenuPrimitive.ItemIndicator
        style={{
          position: 'absolute',
          left: 0,
          width: sizeStyles.itemIndicatorPaddingLeft,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ContextMenuCheckIcon size={sizeStyles.iconSize} color={textColor} />
      </ContextMenuPrimitive.ItemIndicator>
      <Text size={sizeStyles.itemFontSize as TextSize} style={{ color: textColor }}>
        {children}
      </Text>
    </ContextMenuPrimitive.CheckboxItem>
  );
}

// ============================================================================
// ContextMenu.RadioGroup
// ============================================================================

type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroupProps;

function ContextMenuRadioGroup(props: ContextMenuRadioGroupProps) {
  return <ContextMenuPrimitive.RadioGroup {...props} />;
}

// ============================================================================
// ContextMenu.RadioItem
// ============================================================================

type ContextMenuRadioItemProps = Omit<ContextMenuPrimitive.RadioItemProps, 'children'> & {
  children?: React.ReactNode;
};

function ContextMenuRadioItem({ children, disabled, ...props }: ContextMenuRadioItemProps) {
  const { size } = React.useContext(ContextMenuContext);
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
    <ContextMenuPrimitive.RadioItem
      disabled={disabled}
      onHoverIn={Platform.OS !== 'web' ? () => setHovered(true) : undefined}
      onHoverOut={Platform.OS !== 'web' ? () => setHovered(false) : undefined}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={itemStyle}
      {...webHoverProps}
      {...props}>
      <ContextMenuPrimitive.ItemIndicator
        style={{
          position: 'absolute',
          left: 0,
          width: sizeStyles.itemIndicatorPaddingLeft,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ContextMenuCheckIcon size={sizeStyles.iconSize} color={textColor} />
      </ContextMenuPrimitive.ItemIndicator>
      <Text size={sizeStyles.itemFontSize as TextSize} style={{ color: textColor }}>
        {children}
      </Text>
    </ContextMenuPrimitive.RadioItem>
  );
}

// ============================================================================
// ContextMenu.Label
// ============================================================================

type ContextMenuLabelProps = ContextMenuPrimitive.LabelProps;

function ContextMenuLabel({ children, ...props }: ContextMenuLabelProps) {
  const { size, hasIndicators } = React.useContext(ContextMenuContext);
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
// ContextMenu.Separator
// ============================================================================

type ContextMenuSeparatorProps = ContextMenuPrimitive.SeparatorProps;

function ContextMenuSeparator(props: ContextMenuSeparatorProps) {
  const { size } = React.useContext(ContextMenuContext);
  const { colors } = useThemeTokens();

  const sizeStyles = getMenuSizeStyles(size);

  return (
    <ContextMenuPrimitive.Separator
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
// ContextMenu.Group
// ============================================================================

type ContextMenuGroupProps = ContextMenuPrimitive.GroupProps;

function ContextMenuGroup(props: ContextMenuGroupProps) {
  return <ContextMenuPrimitive.Group {...props} />;
}

// ============================================================================
// ContextMenu.Sub
// ============================================================================

type ContextMenuSubProps = ContextMenuPrimitive.SubProps;

function ContextMenuSub(props: ContextMenuSubProps) {
  return <ContextMenuPrimitive.Sub {...props} />;
}

// ============================================================================
// ContextMenu.SubTrigger
// ============================================================================

type ContextMenuSubTriggerProps = Omit<ContextMenuPrimitive.SubTriggerProps, 'children'> & {
  children?: React.ReactNode;
};

function ContextMenuSubTrigger({ children, disabled, ...props }: ContextMenuSubTriggerProps) {
  const { size, hasIndicators } = React.useContext(ContextMenuContext);
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
    <ContextMenuPrimitive.SubTrigger
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
      <ContextMenuChevronRightIcon size={sizeStyles.iconSize} color={textColor} />
    </ContextMenuPrimitive.SubTrigger>
  );
}

// ============================================================================
// ContextMenu.SubContent
// ============================================================================

type ContextMenuSubContentProps = ContextMenuPrimitive.SubContentProps;

function ContextMenuSubContent(props: ContextMenuSubContentProps) {
  const { size, variant } = React.useContext(ContextMenuContext);
  const { colors, isDark } = useThemeTokens();

  const sizeStyles = getMenuSizeStyles(size);
  const backgroundColor = variant === 'solid' ? colors.panelSolid : colors.panelTranslucent;

  return (
    <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
      <ContextMenuPrimitive.SubContent
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

const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,
  Group: ContextMenuGroup,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
};

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};

export type {
  ContextMenuCheckboxItemProps,
  ContextMenuContentProps,
  ContextMenuGroupProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuRootProps,
  ContextMenuSeparatorProps,
  ContextMenuSize,
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuTriggerProps,
  ContextMenuVariant,
};
