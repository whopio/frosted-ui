import { Card, type CardVariant } from '@/components/card';
import { TextStyleContext } from '@/components/text';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import {
  Platform,
  Pressable,
  Text,
  View,
  type PressableProps,
  type TextProps,
  type TextStyle,
  type ViewProps,
  type ViewStyle,
} from 'react-native';

// ============================================================================
// List.Root
// ============================================================================

type ListRootProps = ViewProps & {
  variant?: CardVariant;
};

function ListRoot({ variant = 'surface', style, children, ...props }: ListRootProps) {
  return (
    <Card variant={variant} style={[{ padding: 0 }, style]} {...props}>
      {children}
    </Card>
  );
}

// ============================================================================
// List.Item
// ============================================================================

type ListItemProps = Omit<PressableProps, 'style'> & {
  style?: ViewStyle;
};

function ListItem({ children, onPress, disabled, style, ...props }: ListItemProps) {
  const { colors } = useThemeTokens();
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const isInteractive = !!onPress && !disabled;
  const isHighlighted = isInteractive && (pressed || hovered);

  const itemStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: isHighlighted ? colors.palettes.gray.a3 : undefined,
    ...(Platform.OS === 'web' && isInteractive
      ? ({ cursor: 'pointer', userSelect: 'none' } as ViewStyle)
      : {}),
  };

  // Web hover handlers
  const webProps =
    Platform.OS === 'web' && isInteractive
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled || !onPress}
      style={[itemStyle, style]}
      {...webProps}
      {...props}>
      {children}
    </Pressable>
  );
}

// ============================================================================
// List.ItemSlot
// ============================================================================

type ListItemSlotProps = ViewProps;

function ListItemSlot({ children, style, ...props }: ListItemSlotProps) {
  const { colors } = useThemeTokens();

  const slotStyle: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
    minHeight: 24,
  };

  // Provide icon color context
  return (
    <TextStyleContext.Provider value={{ color: colors.palettes.gray.a11 }}>
      <View style={[slotStyle, style]} {...props}>
        {children}
      </View>
    </TextStyleContext.Provider>
  );
}

// ============================================================================
// List.ItemContent
// ============================================================================

type ListItemContentProps = ViewProps;

function ListItemContent({ children, style, ...props }: ListItemContentProps) {
  const contentStyle: ViewStyle = {
    flex: 1,
    gap: 2,
    justifyContent: 'center',
  };

  return (
    <View style={[contentStyle, style]} {...props}>
      {children}
    </View>
  );
}

// ============================================================================
// List.ItemTitle
// ============================================================================

type ListItemTitleProps = Omit<TextProps, 'style'> & {
  style?: TextStyle;
};

function ListItemTitle({ children, style, ...props }: ListItemTitleProps) {
  const { colors, typography, fontWeights } = useThemeTokens();
  const typo = typography['3'];

  const titleStyle: TextStyle = {
    fontSize: typo.fontSize,
    lineHeight: typo.lineHeight,
    letterSpacing: typo.letterSpacing,
    fontWeight: fontWeights.medium,
    color: colors.palettes.gray['12'],
  };

  return (
    <Text style={[titleStyle, style]} {...props}>
      {children}
    </Text>
  );
}

// ============================================================================
// List.ItemDescription
// ============================================================================

type ListItemDescriptionProps = Omit<TextProps, 'style'> & {
  style?: TextStyle;
};

function ListItemDescription({ children, style, ...props }: ListItemDescriptionProps) {
  const { colors, typography } = useThemeTokens();
  const typo = typography['2'];

  const descriptionStyle: TextStyle = {
    fontSize: typo.fontSize,
    lineHeight: typo.lineHeight,
    letterSpacing: typo.letterSpacing,
    color: colors.palettes.gray.a11,
  };

  return (
    <Text style={[descriptionStyle, style]} {...props}>
      {children}
    </Text>
  );
}

// ============================================================================
// List.Separator
// ============================================================================

type ListSeparatorProps = ViewProps;

function ListSeparator({ style, ...props }: ListSeparatorProps) {
  const { colors } = useThemeTokens();

  const separatorStyle: ViewStyle = {
    height: 1,
    backgroundColor: colors.stroke,
  };

  return <View style={[separatorStyle, style]} {...props} />;
}

// ============================================================================
// Exports
// ============================================================================

const List = {
  Root: ListRoot,
  Item: ListItem,
  ItemSlot: ListItemSlot,
  ItemContent: ListItemContent,
  ItemTitle: ListItemTitle,
  ItemDescription: ListItemDescription,
  Separator: ListSeparator,
};

export { List };
export type {
  ListItemContentProps,
  ListItemDescriptionProps,
  ListItemProps,
  ListItemSlotProps,
  ListItemTitleProps,
  ListRootProps,
  ListSeparatorProps,
};
