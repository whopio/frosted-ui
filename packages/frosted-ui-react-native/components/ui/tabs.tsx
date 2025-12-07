import { TextStyleContext } from '@/components/ui/text';
import { themeVars } from '@/lib/theme-vars';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as TabsPrimitive from '@rn-primitives/tabs';
import * as React from 'react';
import { View, type ViewStyle } from 'react-native';

const tabsSizes = ['1', '2'] as const;

type TabsSize = (typeof tabsSizes)[number];

type TabsContextValue = {
  size: TabsSize;
  value?: string;
};

const TabsContext = React.createContext<TabsContextValue>({
  size: '2',
  value: undefined,
});

// Size styles from CSS:
// Size 1: height: 36px, font-size-1
// Size 2: height: var(--space-7) = 40px, font-size-2
function getListHeight(size: TabsSize): number {
  switch (size) {
    case '1':
      return 36;
    case '2':
      return 40;
  }
}

function getTextSize(size: TabsSize): keyof typeof themeVars.typography {
  switch (size) {
    case '1':
      return '1';
    case '2':
      return '2';
  }
}

function getTriggerPadding(size: TabsSize): {
  paddingX: number;
  innerPaddingX: number;
  innerPaddingY: number;
} {
  switch (size) {
    case '1':
      return { paddingX: 4, innerPaddingX: 6, innerPaddingY: 4 }; // space-1 = 4px
    case '2':
      return { paddingX: 4, innerPaddingX: 10, innerPaddingY: 4 }; // 1.25 * space-2 = 10px
  }
}

type TabsRootProps = TabsPrimitive.RootProps & {
  size?: TabsSize;
};

function TabsRoot({ size = '2', value, onValueChange, children, ...props }: TabsRootProps) {
  const contextValue = React.useMemo(() => ({ size, value }), [size, value]);

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root value={value} onValueChange={onValueChange} {...props}>
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
}

type TabsListProps = TabsPrimitive.ListProps;

function TabsList({ children, ...props }: TabsListProps) {
  const { size } = React.useContext(TabsContext);
  const { colors } = useThemeVars();
  const gray = colors.palettes.gray;

  const height = getListHeight(size);

  const listStyle: ViewStyle = {
    flexDirection: 'row',
    height,
    borderBottomWidth: 1,
    borderBottomColor: gray.a5,
    alignItems: 'stretch',
  };

  return (
    <TabsPrimitive.List {...props}>
      <View style={listStyle}>{children}</View>
    </TabsPrimitive.List>
  );
}

type TabsTriggerInnerProps = {
  value?: string;
  hovered?: boolean;
  children?: React.ReactNode;
};

function TabsTriggerInner({ value, hovered, children }: TabsTriggerInnerProps) {
  const { size, value: activeValue } = React.useContext(TabsContext);
  const { colors } = useThemeVars();

  const gray = colors.palettes.gray;
  const accent = colors.palettes.blue; // Default accent

  const isActive = value === activeValue;
  const { paddingX, innerPaddingX, innerPaddingY } = getTriggerPadding(size);
  const textSize = getTextSize(size);

  // Text color - gray-12 on hover or active, gray-a11 otherwise
  const textColor = isActive || hovered ? gray['12'] : gray.a11;

  // Trigger wrapper style - stretch to full height
  const triggerStyle: ViewStyle = {
    paddingHorizontal: paddingX,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
  };

  // Inner content style with hover background
  const innerStyle: ViewStyle = {
    paddingHorizontal: innerPaddingX,
    paddingVertical: innerPaddingY,
    borderRadius: size === '1' ? 4 : 6, // radius-2 or radius-3
    backgroundColor: hovered ? gray.a3 : undefined,
  };

  // Active indicator (bottom border)
  const activeIndicatorStyle: ViewStyle = {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: accent['10'],
  };

  return (
    <TextStyleContext.Provider
      value={{ size: textSize, weight: isActive ? 'medium' : 'regular', color: textColor }}>
      <View style={triggerStyle}>
        <View style={innerStyle}>{children}</View>
        {isActive && <View style={activeIndicatorStyle} />}
      </View>
    </TextStyleContext.Provider>
  );
}

type TabsTriggerProps = Omit<TabsPrimitive.TriggerProps, 'children'> & {
  children?: React.ReactNode;
};

function TabsTrigger({ value, children, ...props }: TabsTriggerProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <TabsPrimitive.Trigger
      value={value}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      {...props}>
      <TabsTriggerInner value={value} hovered={hovered}>
        {children}
      </TabsTriggerInner>
    </TabsPrimitive.Trigger>
  );
}

type TabsContentProps = TabsPrimitive.ContentProps;

function TabsContent({ ...props }: TabsContentProps) {
  return <TabsPrimitive.Content {...props} />;
}

const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};

export { Tabs, TabsContent, TabsList, TabsRoot, TabsTrigger };
export type { TabsContentProps, TabsListProps, TabsRootProps, TabsTriggerProps };
