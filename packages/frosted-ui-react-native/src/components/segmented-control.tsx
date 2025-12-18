import { Text, TextStyleContext } from '@/components/text';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as TabsPrimitive from '@rn-primitives/tabs';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';

type SegmentedControlContextValue = {
  value?: string;
};

const SegmentedControlContext = React.createContext<SegmentedControlContextValue>({
  value: undefined,
});

type SegmentedControlRootProps = TabsPrimitive.RootProps;

function SegmentedControlRoot({
  value,
  onValueChange,
  children,
  ...props
}: SegmentedControlRootProps) {
  const contextValue = React.useMemo(() => ({ value }), [value]);

  return (
    <SegmentedControlContext.Provider value={contextValue}>
      <TabsPrimitive.Root value={value} onValueChange={onValueChange} {...props}>
        {children}
      </TabsPrimitive.Root>
    </SegmentedControlContext.Provider>
  );
}

type SegmentedControlListProps = TabsPrimitive.ListProps;

function SegmentedControlList({ children, style, ...props }: SegmentedControlListProps) {
  const { colors } = useThemeTokens();
  const gray = colors.palettes.gray;

  // Container style - matches CSS:
  // height: var(--space-7) = 40px
  // background: var(--gray-a3)
  // border-radius: var(--radius-4) = 10px
  // padding: var(--space-1) = 4px
  const listStyle: ViewStyle = {
    flexDirection: 'row',
    height: 40,
    backgroundColor: gray.a3,
    borderRadius: 10,
    padding: 4,
    alignItems: 'stretch',
  };

  return (
    <TabsPrimitive.List {...props}>
      <View style={[listStyle, style]}>{children}</View>
    </TabsPrimitive.List>
  );
}

type SegmentedControlTriggerInnerProps = {
  value?: string;
  hovered?: boolean;
  children?: React.ReactNode;
};

function SegmentedControlTriggerInner({
  value,
  hovered,
  children,
}: SegmentedControlTriggerInnerProps) {
  const { value: activeValue } = React.useContext(SegmentedControlContext);
  const { colors, isDark } = useThemeTokens();

  const gray = colors.palettes.gray;

  const isActive = value === activeValue;

  // Text color from CSS:
  // Default: gray-a9
  // Hover: gray-a11
  // Active: gray-a12
  const textColor = isActive ? gray['12'] : hovered ? gray.a11 : gray.a9;

  // Trigger style - matches CSS
  const triggerStyle: ViewStyle = {
    flex: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // radius-3
    paddingHorizontal: 8, // space-2
    position: 'relative',
  };

  // Active thumb background with shadow
  // Light mode: var(--color-panel-solid) = white with shadow
  // Dark mode: white-a3 background
  const activeStyle: ViewStyle | undefined = isActive
    ? isDark
      ? {
          backgroundColor: colors.palettes.white.a3,
        }
      : {
          backgroundColor: colors.panelSolid,
          ...(Platform.OS === 'web'
            ? {
                boxShadow:
                  '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
              }
            : {
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 2,
                elevation: 2,
              }),
        }
    : undefined;

  // Inner content style
  const innerStyle: ViewStyle = {
    flexDirection: 'row',
    gap: 8, // space-2
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Wrap string children in Text component
  const content = typeof children === 'string' ? <Text>{children}</Text> : children;

  return (
    <TextStyleContext.Provider value={{ size: '2', weight: 'medium', color: textColor }}>
      <View style={[triggerStyle, activeStyle]}>
        <View style={innerStyle}>{content}</View>
      </View>
    </TextStyleContext.Provider>
  );
}

type SegmentedControlTriggerProps = Omit<TabsPrimitive.TriggerProps, 'children'> & {
  children?: React.ReactNode;
};

function SegmentedControlTrigger({ value, children, ...props }: SegmentedControlTriggerProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <TabsPrimitive.Trigger
      value={value}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={{ flex: 1 }}
      {...props}>
      <SegmentedControlTriggerInner value={value} hovered={hovered}>
        {children}
      </SegmentedControlTriggerInner>
    </TabsPrimitive.Trigger>
  );
}

type SegmentedControlContentProps = TabsPrimitive.ContentProps;

function SegmentedControlContent({ ...props }: SegmentedControlContentProps) {
  return <TabsPrimitive.Content {...props} />;
}

const SegmentedControl = {
  Root: SegmentedControlRoot,
  List: SegmentedControlList,
  Trigger: SegmentedControlTrigger,
  Content: SegmentedControlContent,
};

export {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlRoot,
  SegmentedControlTrigger,
};
export type {
  SegmentedControlContentProps,
  SegmentedControlListProps,
  SegmentedControlRootProps,
  SegmentedControlTriggerProps,
};
