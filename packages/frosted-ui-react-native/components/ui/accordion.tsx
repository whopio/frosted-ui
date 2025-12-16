import { useThemeVars } from '@/lib/use-theme-vars';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import * as React from 'react';
import { Platform, Pressable, View, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from './text';

// Custom chevron icon that matches web version
function ChevronIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6 12L9.64645 8.35355C9.84171 8.15829 10.1583 8.15829 10.3536 8.35355L14 12"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

type AccordionRootProps = Omit<AccordionPrimitive.RootProps, 'asChild'> &
  React.RefAttributes<AccordionPrimitive.RootRef>;

function AccordionRoot({ children, ...props }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root {...(props as AccordionPrimitive.RootProps)}>
      {children}
    </AccordionPrimitive.Root>
  );
}

type AccordionItemProps = AccordionPrimitive.ItemProps &
  React.RefAttributes<AccordionPrimitive.ItemRef>;

function AccordionItem({ children, value, ...props }: AccordionItemProps) {
  return (
    // @ts-expect-error - Known type incompatibility with rn-primitives
    <AccordionPrimitive.Item value={value} {...props}>
      {children}
    </AccordionPrimitive.Item>
  );
}

const TriggerWrapper = Platform.OS === 'web' ? View : Pressable;

type AccordionTriggerProps = AccordionPrimitive.TriggerProps & {
  children?: React.ReactNode;
} & React.RefAttributes<AccordionPrimitive.TriggerRef>;

function AccordionTrigger({ children, ...props }: AccordionTriggerProps) {
  const { isExpanded } = AccordionPrimitive.useItemContext();
  const { colors } = useThemeVars();
  const gray = colors.palettes.gray;

  // Trigger styles matching web CSS
  const triggerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 8, // space-2
    backgroundColor: gray.a3,
    borderRadius: 8, // radius-4
    paddingVertical: 8, // space-2
    paddingHorizontal: 16, // space-4
    // Inset border using boxShadow on web, borderWidth on native
    ...(Platform.OS === 'web'
      ? {
          boxShadow: `0px 0px 0px 1px ${gray.a5} inset`,
        }
      : {
          borderWidth: 1,
          borderColor: gray.a5,
        }),
  };

  // Focus style for web
  const focusStyle: ViewStyle | undefined =
    Platform.OS === 'web'
      ? ({
          outlineWidth: 0,
        } as ViewStyle)
      : undefined;

  // Chevron rotation style
  const chevronStyle: ViewStyle = {
    transform: [{ rotate: isExpanded ? '0deg' : '180deg' }],
  };

  return (
    <AccordionPrimitive.Header>
      {/* @ts-expect-error - Known type incompatibility with rn-primitives asChild */}
      <AccordionPrimitive.Trigger {...props} asChild>
        <TriggerWrapper style={[triggerStyle, focusStyle]}>
          <View style={chevronStyle}>
            <ChevronIcon size={20} color={gray.a11} />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              size="1"
              weight="bold"
              style={{
                color: gray.a11,
                textTransform: 'uppercase',
                letterSpacing: 0.06 * 12, // 0.06em at font-size 12px
              }}>
              {children}
            </Text>
          </View>
        </TriggerWrapper>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

type AccordionContentProps = AccordionPrimitive.ContentProps &
  React.RefAttributes<AccordionPrimitive.ContentRef>;

function AccordionContent({ children, ...props }: AccordionContentProps) {
  // Content inner padding matching web CSS
  const contentInnerStyle: ViewStyle = {
    paddingVertical: 16, // space-4
    paddingHorizontal: 20, // space-5
  };

  return (
    // @ts-expect-error - Known type incompatibility with rn-primitives
    <AccordionPrimitive.Content {...props}>
      <View style={contentInnerStyle}>{children}</View>
    </AccordionPrimitive.Content>
  );
}

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};

export { Accordion, AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger };
export type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionRootProps,
  AccordionTriggerProps,
};
