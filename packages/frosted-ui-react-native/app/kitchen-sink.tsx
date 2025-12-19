import {
  Accordion,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Callout,
  Card,
  Checkbox,
  Code,
  ContextMenu,
  Dialog,
  DropdownMenu,
  Heading,
  HoverCard,
  Icon,
  IconButton,
  Label,
  Link,
  List,
  Popover,
  Progress,
  RadioGroup,
  SegmentedControl,
  Select,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  Text,
  TextArea,
  TextField,
  Tooltip,
  useThemeTokens,
} from '@frosted-ui/react-native';
import { Stack } from 'expo-router';
import {
  AlertCircleIcon,
  BellIcon,
  CalendarIcon,
  ChevronRightIcon,
  InfoIcon,
  MailIcon,
  MoonIcon,
  MoreVertical,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  WifiIcon,
} from 'lucide-react-native';
import * as React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderOptions } from './_header';

// ============================================================================
// Responsive Layout
// ============================================================================

const MAX_CONTENT_WIDTH = 600;
const BREAKPOINT = 768;

function useResponsiveLayout() {
  const { width } = useWindowDimensions();
  const isWide = width >= BREAKPOINT;
  const horizontalPadding = isWide ? Math.max(24, (width - MAX_CONTENT_WIDTH) / 2) : 16;

  return { isWide, horizontalPadding };
}

const HEADING_SIZES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const TEXT_SIZES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const TEXT_WEIGHTS = ['light', 'regular', 'medium', 'semi-bold', 'bold'] as const;

// Common styles
const s = StyleSheet.create({
  // Gaps
  gap1: { gap: 4 },
  gap1_5: { gap: 6 },
  gap2: { gap: 8 },
  gap3: { gap: 12 },
  gap4: { gap: 16 },
  gap6: { gap: 24 },
  gap8: { gap: 32 },
  // Padding
  p4: { padding: 16 },
  pt24: { paddingTop: 96 },
  // Flex
  flex1: { flex: 1 },
  row: { flexDirection: 'row' },
  wrap: { flexWrap: 'wrap' },
  itemsCenter: { alignItems: 'center' },
  justifyCenter: { justifyContent: 'center' },
  // Dimensions
  wFull: { width: '100%' },
  hFull: { height: '100%' },
  maxWMd: { maxWidth: 448 },
  h8: { height: 32 },
  h20: { height: 80 },
  h32: { height: 128 },
  // Border radius
  roundedMd: { borderRadius: 6 },
  roundedFull: { borderRadius: 9999 },
});

export default function KitchenSinkScreen() {
  const { colors, isDark } = useThemeTokens();
  const headerOptions = useHeaderOptions();
  const { horizontalPadding, isWide } = useResponsiveLayout();
  const insets = useSafeAreaInsets();

  // On iOS/Android, account for safe area + header (~44px)
  // On web, use fixed padding since header is transparent overlay
  const topPadding = Platform.OS === 'web' ? 96 : insets.top + 44 + 16;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Components',
          ...headerOptions,
        }}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: isDark ? colors.surface : colors.background }}
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          maxWidth: isWide ? MAX_CONTENT_WIDTH + horizontalPadding * 2 : undefined,
          alignSelf: isWide ? 'center' : undefined,
          width: '100%',
        }}>
        <View style={[s.gap8, { paddingTop: topPadding, paddingBottom: 16 }]}>
          {/* Typography Section */}
          <ComponentSection title="Typography">
            <View style={s.gap4}>
              <View style={s.gap2}>
                {HEADING_SIZES.map((size) => (
                  <Heading key={size} size={size}>
                    Heading size {size}
                  </Heading>
                ))}
              </View>
              <View style={s.gap2}>
                <SectionLabel>Heading Colors</SectionLabel>
                <Heading color="blue">Heading with blue color</Heading>
                <Heading color="yellow">Heading with yellow color</Heading>
                <Heading color="green">Heading with green color</Heading>
                <Heading color="red">Heading with red color</Heading>
                <Heading color="purple">Heading with purple color</Heading>
                <Heading color="orange">Heading with orange color</Heading>
              </View>
              <View style={s.gap2}>
                <SectionLabel>Text Sizes</SectionLabel>
                {TEXT_SIZES.map((size) => (
                  <Text key={size} size={size}>
                    Text size {size}
                  </Text>
                ))}
              </View>
              <View style={s.gap2}>
                <SectionLabel>Text Weights</SectionLabel>
                {TEXT_WEIGHTS.map((weight) => (
                  <Text key={weight} weight={weight}>
                    Text weight {weight}
                  </Text>
                ))}
              </View>
              <View style={s.gap2}>
                <SectionLabel>Text Colors</SectionLabel>
                <Text color="blue">Text with blue color</Text>
                <Text color="yellow">Text with yellow color</Text>
                <Text color="green">Text with green color</Text>
                <Text color="red">Text with red color</Text>
                <Text color="purple">Text with purple color</Text>
                <Text color="orange">Text with orange color</Text>
                <Text color="cyan">Text with cyan color</Text>
                <Text color="pink">Text with pink color</Text>
                <Text color="amber">Text with amber color</Text>
                <Text color="teal">Text with teal color</Text>
              </View>
            </View>
          </ComponentSection>

          {/* Code Section */}
          <ComponentSection title="Code">
            <View style={s.gap6}>
              {/* Variants */}
              <View style={s.gap3}>
                <SectionLabel>Variants</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Code variant="soft">soft</Code>
                  <Code variant="solid">solid</Code>
                  <Code variant="outline">outline</Code>
                  <Code variant="ghost">ghost</Code>
                </View>
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={s.gap1}>
                  <Code size="1">Code size 1</Code>
                  <Code size="2">Code size 2</Code>
                  <Code size="3">Code size 3</Code>
                  <Code size="4">Code size 4</Code>
                  <Code size="5">Code size 5</Code>
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Code color="gray">gray</Code>
                  <Code color="blue">blue</Code>
                  <Code color="green">green</Code>
                  <Code color="red">red</Code>
                  <Code color="purple">purple</Code>
                  <Code color="orange">orange</Code>
                </View>
              </View>

              {/* Inline usage */}
              <View style={s.gap3}>
                <SectionLabel>Inline Usage</SectionLabel>
                <Text>
                  Run <Code>npm install</Code> to install dependencies.
                </Text>
              </View>
            </View>
          </ComponentSection>

          {/* Link Section */}
          <ComponentSection title="Link">
            <View style={s.gap6}>
              {/* Default */}
              <View style={s.gap3}>
                <SectionLabel>Default (accent color)</SectionLabel>
                <Link onPress={() => {}}>Click this link</Link>
              </View>

              {/* Underline */}
              <View style={s.gap3}>
                <SectionLabel>Underline Options</SectionLabel>
                <View style={s.gap2}>
                  <Link underline="auto" onPress={() => {}}>
                    Underline: auto (shows on press)
                  </Link>
                  <Link underline="always" onPress={() => {}}>
                    Underline: always
                  </Link>
                  <Link underline="hover" onPress={() => {}}>
                    Underline: hover (same as auto on mobile)
                  </Link>
                </View>
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={s.gap2}>
                  <Link size="1" onPress={() => {}}>
                    Link size 1
                  </Link>
                  <Link size="2" onPress={() => {}}>
                    Link size 2
                  </Link>
                  <Link size="3" onPress={() => {}}>
                    Link size 3
                  </Link>
                  <Link size="4" onPress={() => {}}>
                    Link size 4
                  </Link>
                  <Link size="5" onPress={() => {}}>
                    Link size 5
                  </Link>
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <View style={[s.row, s.wrap, s.gap3]}>
                  <Link color="blue" onPress={() => {}}>
                    Blue
                  </Link>
                  <Link color="green" onPress={() => {}}>
                    Green
                  </Link>
                  <Link color="red" onPress={() => {}}>
                    Red
                  </Link>
                  <Link color="purple" onPress={() => {}}>
                    Purple
                  </Link>
                  <Link color="orange" onPress={() => {}}>
                    Orange
                  </Link>
                </View>
              </View>

              {/* Weights */}
              <View style={s.gap3}>
                <SectionLabel>Weights</SectionLabel>
                <View style={s.gap2}>
                  <Link weight="regular" onPress={() => {}}>
                    Regular weight
                  </Link>
                  <Link weight="medium" onPress={() => {}}>
                    Medium weight
                  </Link>
                  <Link weight="bold" onPress={() => {}}>
                    Bold weight
                  </Link>
                </View>
              </View>

              {/* Inline usage */}
              <View style={s.gap3}>
                <SectionLabel>Inline Usage</SectionLabel>
                <Text size="5">
                  Read our <Link onPress={() => {}}>Terms of Service</Link> and{' '}
                  <Link onPress={() => {}}>Privacy Policy</Link>.
                </Text>
              </View>

              {/* External link */}
              <View style={s.gap3}>
                <SectionLabel>External Link</SectionLabel>
                <Link
                  onPress={() => Linking.openURL('https://github.com/AuroPick/frosted-ui')}
                  underline="always">
                  View on GitHub
                </Link>
              </View>
            </View>
          </ComponentSection>

          {/* Buttons Section */}
          <ComponentSection title="Buttons">
            <View style={s.gap6}>
              <View style={s.gap3}>
                <SectionLabel>Variants - Default (accent)</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid">
                    <Text>Solid</Text>
                  </Button>
                  <Button variant="soft">
                    <Text>Soft</Text>
                  </Button>
                  <Button variant="surface">
                    <Text>Surface</Text>
                  </Button>
                  <Button variant="ghost">
                    <Text>Ghost</Text>
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Yellow</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid" color="yellow">
                    <Text>Solid</Text>
                  </Button>
                  <Button variant="soft" color="yellow">
                    <Text>Soft</Text>
                  </Button>
                  <Button variant="surface" color="yellow">
                    <Text>Surface</Text>
                  </Button>
                  <Button variant="ghost" color="yellow">
                    <Text>Ghost</Text>
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Green</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid" color="green">
                    <Text>Solid</Text>
                  </Button>
                  <Button variant="soft" color="green">
                    <Text>Soft</Text>
                  </Button>
                  <Button variant="surface" color="green">
                    <Text>Surface</Text>
                  </Button>
                  <Button variant="ghost" color="green">
                    <Text>Ghost</Text>
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Red</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid" color="red">
                    <Text>Solid</Text>
                  </Button>
                  <Button variant="soft" color="red">
                    <Text>Soft</Text>
                  </Button>
                  <Button variant="surface" color="red">
                    <Text>Surface</Text>
                  </Button>
                  <Button variant="ghost" color="red">
                    <Text>Ghost</Text>
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Purple</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid" color="purple">
                    <Text>Solid</Text>
                  </Button>
                  <Button variant="soft" color="purple">
                    <Text>Soft</Text>
                  </Button>
                  <Button variant="surface" color="purple">
                    <Text>Surface</Text>
                  </Button>
                  <Button variant="ghost" color="purple">
                    <Text>Ghost</Text>
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Button Sizes</SectionLabel>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap2]}>
                  <Button size="1">
                    <Text>Size 1</Text>
                  </Button>
                  <Button size="2">
                    <Text>Size 2</Text>
                  </Button>
                  <Button size="3">
                    <Text>Size 3</Text>
                  </Button>
                  <Button size="4">
                    <Text>Size 4</Text>
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>With Icons</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid" color="blue">
                    <Icon as={MailIcon} />
                    <Text>Email</Text>
                  </Button>
                  <Button variant="surface" color="green">
                    <Text>Notifications</Text>
                    <Icon as={BellIcon} />
                  </Button>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Disabled State</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Button variant="solid" color="blue" disabled>
                    <Text>Disabled Solid</Text>
                  </Button>
                  <Button variant="soft" color="blue" disabled>
                    <Text>Disabled Soft</Text>
                  </Button>
                  <Button variant="surface" color="blue" disabled>
                    <Text>Disabled Surface</Text>
                  </Button>
                  <Button variant="ghost" color="blue" disabled>
                    <Text>Disabled Ghost</Text>
                  </Button>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* IconButton Section */}
          <ComponentSection title="IconButton">
            <View style={s.gap6}>
              <View style={s.gap3}>
                <SectionLabel>Variants - Default (accent)</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <IconButton variant="solid">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="soft">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="surface">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="ghost">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap2]}>
                  <IconButton size="1">
                    <Icon as={SettingsIcon} size={12} />
                  </IconButton>
                  <IconButton size="2">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton size="3">
                    <Icon as={SettingsIcon} size={20} />
                  </IconButton>
                  <IconButton size="4">
                    <Icon as={SettingsIcon} size={24} />
                  </IconButton>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <IconButton color="indigo">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton color="cyan">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton color="orange">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton color="crimson">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Disabled State</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <IconButton variant="solid" color="blue" disabled>
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="soft" color="blue" disabled>
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="surface" color="blue" disabled>
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="ghost" color="blue" disabled>
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Badges Section */}
          <ComponentSection title="Badges">
            <View style={s.gap6}>
              {/* Variants */}
              <View style={s.gap3}>
                <SectionLabel>Variants</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Badge variant="solid">
                    <Text>Solid</Text>
                  </Badge>
                  <Badge variant="soft">
                    <Text>Soft</Text>
                  </Badge>
                  <Badge variant="surface">
                    <Text>Surface</Text>
                  </Badge>
                  <Badge variant="outline">
                    <Text>Outline</Text>
                  </Badge>
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <View style={s.gap2}>
                  <View style={[s.row, s.wrap, s.gap2]}>
                    <Badge variant="solid" color="blue">
                      <Text>Blue</Text>
                    </Badge>
                    <Badge variant="solid" color="yellow">
                      <Text>Yellow</Text>
                    </Badge>
                    <Badge variant="solid" color="green">
                      <Text>Green</Text>
                    </Badge>
                    <Badge variant="solid" color="red">
                      <Text>Red</Text>
                    </Badge>
                    <Badge variant="solid" color="purple">
                      <Text>Purple</Text>
                    </Badge>
                  </View>
                  <View style={[s.row, s.wrap, s.gap2]}>
                    <Badge variant="soft" color="blue">
                      <Text>Blue</Text>
                    </Badge>
                    <Badge variant="soft" color="yellow">
                      <Text>Yellow</Text>
                    </Badge>
                    <Badge variant="soft" color="green">
                      <Text>Green</Text>
                    </Badge>
                    <Badge variant="soft" color="red">
                      <Text>Red</Text>
                    </Badge>
                    <Badge variant="soft" color="purple">
                      <Text>Purple</Text>
                    </Badge>
                  </View>
                  <View style={[s.row, s.wrap, s.gap2]}>
                    <Badge variant="surface" color="blue">
                      <Text>Blue</Text>
                    </Badge>
                    <Badge variant="surface" color="yellow">
                      <Text>Yellow</Text>
                    </Badge>
                    <Badge variant="surface" color="green">
                      <Text>Green</Text>
                    </Badge>
                    <Badge variant="surface" color="red">
                      <Text>Red</Text>
                    </Badge>
                    <Badge variant="surface" color="purple">
                      <Text>Purple</Text>
                    </Badge>
                  </View>
                  <View style={[s.row, s.wrap, s.gap2]}>
                    <Badge variant="outline" color="blue">
                      <Text>Blue</Text>
                    </Badge>
                    <Badge variant="outline" color="yellow">
                      <Text>Yellow</Text>
                    </Badge>
                    <Badge variant="outline" color="green">
                      <Text>Green</Text>
                    </Badge>
                    <Badge variant="outline" color="red">
                      <Text>Red</Text>
                    </Badge>
                    <Badge variant="outline" color="purple">
                      <Text>Purple</Text>
                    </Badge>
                  </View>
                </View>
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <Badge variant="solid" color="blue" size="1">
                    <Text>Size 1</Text>
                  </Badge>
                  <Badge variant="solid" color="blue" size="2">
                    <Text>Size 2</Text>
                  </Badge>
                  <Badge variant="soft" color="blue" size="1">
                    <Text>Size 1</Text>
                  </Badge>
                  <Badge variant="soft" color="blue" size="2">
                    <Text>Size 2</Text>
                  </Badge>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Cards Section */}
          <ComponentSection title="Cards">
            <View style={s.gap4}>
              <View style={s.gap2}>
                <SectionLabel>Surface (default)</SectionLabel>
                <Card variant="surface">
                  <View style={s.gap1_5}>
                    <Heading size="3">Card Title</Heading>
                    <Text color="gray">Card description goes here</Text>
                  </View>
                </Card>
              </View>
              <View style={s.gap2}>
                <SectionLabel>Soft</SectionLabel>
                <Card variant="soft">
                  <View style={s.gap1_5}>
                    <Heading size="3">Card Title</Heading>
                    <Text color="gray">Card description goes here</Text>
                  </View>
                </Card>
              </View>
              <View style={s.gap2}>
                <SectionLabel>Ghost</SectionLabel>
                <Card variant="ghost">
                  <View style={s.gap1_5}>
                    <Heading size="3">Card Title</Heading>
                    <Text color="gray">Card description goes here</Text>
                  </View>
                </Card>
              </View>
            </View>
          </ComponentSection>

          {/* List Section */}
          <ComponentSection title="List">
            <View style={s.gap6}>
              {/* Basic list */}
              <View style={s.gap3}>
                <SectionLabel>Settings List</SectionLabel>
                <List.Root variant="ghost">
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Icon as={BellIcon} size={20} />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>Notifications</List.ItemTitle>
                      <List.ItemDescription>Manage alerts and sounds</List.ItemDescription>
                    </List.ItemContent>
                    <List.ItemSlot>
                      <Icon as={ChevronRightIcon} size={16} />
                    </List.ItemSlot>
                  </List.Item>
                  <List.Separator />
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Icon as={MoonIcon} size={20} />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>Appearance</List.ItemTitle>
                      <List.ItemDescription>Dark mode, themes</List.ItemDescription>
                    </List.ItemContent>
                    <List.ItemSlot>
                      <Icon as={ChevronRightIcon} size={16} />
                    </List.ItemSlot>
                  </List.Item>
                  <List.Separator />
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Icon as={WifiIcon} size={20} />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>Network</List.ItemTitle>
                    </List.ItemContent>
                    <List.ItemSlot>
                      <Icon as={ChevronRightIcon} size={16} />
                    </List.ItemSlot>
                  </List.Item>
                </List.Root>
              </View>

              {/* With avatars */}
              <View style={s.gap3}>
                <SectionLabel>Contact List</SectionLabel>
                <List.Root>
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Avatar fallback="AK" size="3" color="blue" />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>Alex Kim</List.ItemTitle>
                      <List.ItemDescription>alex@example.com</List.ItemDescription>
                    </List.ItemContent>
                    <List.ItemSlot>
                      <Badge color="success" size="1">
                        <Text>Online</Text>
                      </Badge>
                    </List.ItemSlot>
                  </List.Item>
                  <List.Separator />
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Avatar fallback="SJ" size="3" color="purple" />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>Sarah Johnson</List.ItemTitle>
                      <List.ItemDescription>sarah@example.com</List.ItemDescription>
                    </List.ItemContent>
                  </List.Item>
                  <List.Separator />
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Avatar fallback="MR" size="3" color="orange" />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>Mike Rodriguez</List.ItemTitle>
                      <List.ItemDescription>mike@example.com</List.ItemDescription>
                    </List.ItemContent>
                    <List.ItemSlot>
                      <Badge color="gray" size="1">
                        <Text>Away</Text>
                      </Badge>
                    </List.ItemSlot>
                  </List.Item>
                </List.Root>
              </View>

              {/* With Switch */}
              <View style={s.gap3}>
                <SectionLabel>With Controls</SectionLabel>
                <ListWithSwitchDemo />
              </View>
            </View>
          </ComponentSection>

          {/* Callout Section */}
          <ComponentSection title="Callout">
            <View style={s.gap6}>
              {/* Variants */}
              <View style={s.gap3}>
                <SectionLabel>Variants</SectionLabel>
                <Callout.Root variant="soft">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Soft variant callout with helpful information.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root variant="surface">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Surface variant callout with helpful information.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root variant="outline">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Outline variant callout with helpful information.</Text>
                  </Callout.Text>
                </Callout.Root>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <Callout.Root color="gray">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Gray callout for neutral information.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root color="blue">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Blue callout for informational messages.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <Icon as={RocketIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Green callout for success messages.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root color="yellow">
                  <Callout.Icon>
                    <Icon as={AlertCircleIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Yellow callout for warnings.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root color="red">
                  <Callout.Icon>
                    <Icon as={AlertCircleIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Red callout for errors or critical information.</Text>
                  </Callout.Text>
                </Callout.Root>
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <Callout.Root size="1" color="purple">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Size 1 - Compact callout.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root size="2" color="purple">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Size 2 - Default callout size.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root size="3" color="purple">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Size 3 - Larger callout for emphasis.</Text>
                  </Callout.Text>
                </Callout.Root>
              </View>
            </View>
          </ComponentSection>

          {/* TextField Section */}
          <ComponentSection title="TextField">
            <View style={s.gap6}>
              {/* Variants */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Variants
                </Text>
                <TextField.Input placeholder="Surface variant (default)" />
                <TextField.Input variant="soft" placeholder="Soft variant" />
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Sizes
                </Text>
                <TextField.Input size="1" placeholder="Size 1" />
                <TextField.Input size="2" placeholder="Size 2 (default)" />
                <TextField.Input size="3" placeholder="Size 3" />
                <TextField.Input size="4" placeholder="Size 4" />
              </View>

              {/* Colors (soft variant) */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Colors (soft variant)
                </Text>
                <TextField.Input variant="soft" color="blue" placeholder="Blue" />
                <TextField.Input variant="soft" color="green" placeholder="Green" />
                <TextField.Input variant="soft" color="red" placeholder="Red" />
              </View>

              {/* With Slots - Size Story */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  With Slots
                </Text>
                <View style={s.gap3}>
                  {/* Size 1 */}
                  <View style={[s.row, s.itemsCenter, s.gap2]}>
                    <TextField.Root size="1" style={s.flex1}>
                      <TextField.Slot>
                        <Icon as={SearchIcon} size={12} />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search the docs…" />
                    </TextField.Root>
                    <Button size="1" variant="surface">
                      <Text>Search</Text>
                    </Button>
                  </View>

                  {/* Size 2 */}
                  <View style={[s.row, s.itemsCenter, s.gap2]}>
                    <TextField.Root size="2" style={s.flex1}>
                      <TextField.Slot>
                        <Icon as={SearchIcon} size={16} />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search the docs…" />
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <Icon as={MoreVertical} size={16} />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                    <Button size="2" variant="surface">
                      <Text>Search</Text>
                    </Button>
                  </View>

                  {/* Size 3 */}
                  <View style={[s.row, s.itemsCenter, s.gap2]}>
                    <TextField.Root size="3" style={s.flex1}>
                      <TextField.Slot>
                        <Icon as={SearchIcon} size={20} />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search the docs…" />
                      <TextField.Slot style={{ paddingRight: 12 }}>
                        <IconButton size="2" variant="ghost" color="gray">
                          <Icon as={MoreVertical} size={20} />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                    <Button size="3" variant="surface">
                      <Text>Search</Text>
                    </Button>
                  </View>

                  {/* Size 4 */}
                  <View style={[s.row, s.itemsCenter, s.gap2]}>
                    <TextField.Root size="4" style={s.flex1}>
                      <TextField.Slot>
                        <Icon as={SearchIcon} size={24} />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search the docs…" />
                      <TextField.Slot style={{ paddingRight: 12 }}>
                        <IconButton size="2" variant="ghost" color="gray">
                          <Icon as={MoreVertical} size={20} />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                    <Button size="4" variant="surface">
                      <Text>Search</Text>
                    </Button>
                  </View>
                </View>
              </View>

              {/* Disabled */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Disabled
                </Text>
                <TextField.Input placeholder="Disabled (surface)" editable={false} />
                <TextField.Input variant="soft" placeholder="Disabled (soft)" editable={false} />
              </View>
            </View>
          </ComponentSection>

          {/* TextArea Section */}
          <ComponentSection title="TextArea">
            <View style={s.gap6}>
              {/* Variants */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Variants
                </Text>
                <TextArea placeholder="Surface variant (default)" />
                <TextArea variant="soft" placeholder="Soft variant" />
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Sizes
                </Text>
                <TextArea size="1" placeholder="Size 1" />
                <TextArea size="2" placeholder="Size 2 (default)" />
                <TextArea size="3" placeholder="Size 3" />
                <TextArea size="4" placeholder="Size 4" />
              </View>

              {/* Colors (soft variant) */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Colors (soft variant)
                </Text>
                <TextArea variant="soft" color="blue" placeholder="Blue" />
                <TextArea variant="soft" color="green" placeholder="Green" />
                <TextArea variant="soft" color="red" placeholder="Red" />
              </View>

              {/* Disabled */}
              <View style={s.gap3}>
                <Text size="2" weight="medium" color="gray">
                  Disabled
                </Text>
                <TextArea placeholder="Disabled (surface)" editable={false} />
                <TextArea variant="soft" placeholder="Disabled (soft)" editable={false} />
              </View>
            </View>
          </ComponentSection>

          {/* Checkbox Section */}
          <ComponentSection title="Checkbox">
            <View style={s.gap6}>
              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={[s.row, s.itemsCenter, s.gap4]}>
                  <CheckboxItem label="Size 1" size="1" defaultChecked />
                  <CheckboxItem label="Size 2" size="2" defaultChecked />
                  <CheckboxItem label="Size 3" size="3" defaultChecked />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <View style={[s.row, s.wrap, s.gap4]}>
                  <CheckboxItem label="Blue" color="blue" defaultChecked />
                  <CheckboxItem label="Green" color="green" defaultChecked />
                  <CheckboxItem label="Red" color="red" defaultChecked />
                  <CheckboxItem label="Purple" color="purple" defaultChecked />
                  <CheckboxItem label="Yellow" color="yellow" defaultChecked />
                </View>
              </View>

              {/* States */}
              <View style={s.gap3}>
                <SectionLabel>States</SectionLabel>
                <View style={s.gap3}>
                  <CheckboxItem label="Unchecked" />
                  <CheckboxItem label="Checked" defaultChecked />
                  <CheckboxItem label="Disabled unchecked" disabled />
                  <CheckboxItem label="Disabled checked" defaultChecked disabled />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Radio Group Section */}
          <ComponentSection title="Radio Group">
            <View style={s.gap6}>
              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={[s.row, s.gap6]}>
                  <RadioGroupDemo size="1" />
                  <RadioGroupDemo size="2" />
                  <RadioGroupDemo size="3" />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Colors</SectionLabel>
                <View style={[s.row, s.wrap, s.gap6]}>
                  <RadioGroupDemo size="2" color="blue" />
                  <RadioGroupDemo size="2" color="green" />
                  <RadioGroupDemo size="2" color="red" />
                  <RadioGroupDemo size="2" color="purple" />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Switch Section */}
          <ComponentSection title="Switch">
            <View style={s.gap6}>
              {/* Sizes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View style={[s.row, s.itemsCenter, s.gap6]}>
                  <SwitchItem size="1" defaultChecked />
                  <SwitchItem size="2" defaultChecked />
                  <SwitchItem size="3" defaultChecked />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View style={[s.row, s.wrap, s.gap6]}>
                  <SwitchItem color="blue" defaultChecked />
                  <SwitchItem color="green" defaultChecked />
                  <SwitchItem color="red" defaultChecked />
                  <SwitchItem color="purple" defaultChecked />
                  <SwitchItem color="gray" defaultChecked />
                </View>
              </View>

              {/* States */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  States
                </Text>
                <View style={s.gap3}>
                  <SwitchItem label="Unchecked" />
                  <SwitchItem label="Checked" defaultChecked />
                  <SwitchItem label="Disabled unchecked" disabled />
                  <SwitchItem label="Disabled checked" disabled defaultChecked />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Separator Section */}
          <ComponentSection title="Separator">
            <View style={s.gap6}>
              {/* Default Demo */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Default
                </Text>
                <View>
                  <Text size="2">Tools for building high-quality, accessible UI.</Text>
                  <Separator size="4" style={{ marginVertical: 12 }} />
                  <View style={[s.row, s.itemsCenter, s.gap3]}>
                    <Text size="2">Themes</Text>
                    <Separator orientation="vertical" />
                    <Text size="2">Primitives</Text>
                    <Separator orientation="vertical" />
                    <Text size="2">Icons</Text>
                    <Separator orientation="vertical" />
                    <Text size="2">Colors</Text>
                  </View>
                </View>
              </View>

              {/* Sizes - Horizontal */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes (Horizontal)
                </Text>
                <View style={s.gap3}>
                  <Separator size="1" />
                  <Separator size="2" />
                  <Separator size="3" />
                  <Separator size="4" />
                </View>
              </View>

              {/* Sizes - Vertical */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes (Vertical)
                </Text>
                <View style={[s.row, s.itemsCenter, s.gap3, { height: 64 }]}>
                  <Separator size="1" orientation="vertical" />
                  <Separator size="2" orientation="vertical" />
                  <Separator size="3" orientation="vertical" />
                  <Separator size="4" orientation="vertical" />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View style={s.gap3}>
                  <Separator size="4" color="gray" />
                  <Separator size="4" color="blue" />
                  <Separator size="4" color="green" />
                  <Separator size="4" color="red" />
                  <Separator size="4" color="purple" />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Spinner Section */}
          <ComponentSection title="Spinner">
            <View style={s.gap6}>
              {/* Sizes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap4]}>
                  <Spinner size="1" />
                  <Spinner size="2" />
                  <Spinner size="3" />
                  <Spinner size="4" />
                  <Spinner size="5" />
                  <Spinner size="6" />
                </View>
              </View>

              {/* With Loading State */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  With Loading State (wrapping children)
                </Text>
                <View style={[s.row, s.gap4]}>
                  <Spinner loading={true}>
                    <Button>
                      <Text>Submit</Text>
                    </Button>
                  </Spinner>
                  <Spinner loading={false}>
                    <Button>
                      <Text>Submit</Text>
                    </Button>
                  </Spinner>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Progress Section */}
          <ComponentSection title="Progress">
            <View style={s.gap6}>
              {/* Sizes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View style={s.gap3}>
                  <Progress size="1" value={60} />
                  <Progress size="2" value={60} />
                  <Progress size="3" value={60} />
                  <Progress size="4" value={60} />
                  <Progress size="5" value={60} />
                  <Progress size="6" value={60} />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View style={s.gap3}>
                  <Progress size="3" color="blue" value={60} />
                  <Progress size="3" color="green" value={60} />
                  <Progress size="3" color="red" value={60} />
                  <Progress size="3" color="purple" value={60} />
                  <Progress size="3" color="gray" value={60} />
                </View>
              </View>

              {/* Values */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Values
                </Text>
                <View style={s.gap3}>
                  <Progress value={0} />
                  <Progress value={25} />
                  <Progress value={50} />
                  <Progress value={75} />
                  <Progress value={100} />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Avatar Section */}
          <ComponentSection title="Avatar">
            <View style={s.gap6}>
              {/* Sizes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap3]}>
                  <Avatar size="0" fallback="John Doe" />
                  <Avatar size="1" fallback="John Doe" />
                  <Avatar size="2" fallback="John Doe" />
                  <Avatar size="3" fallback="John Doe" />
                  <Avatar size="4" fallback="John Doe" />
                  <Avatar size="5" fallback="John Doe" />
                  <Avatar size="6" fallback="John Doe" />
                  <Avatar size="7" fallback="John Doe" />
                  <Avatar size="8" fallback="John Doe" />
                  <Avatar size="9" fallback="John Doe" />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View style={[s.row, s.wrap, s.gap3]}>
                  <Avatar color="blue" fallback="Blue" />
                  <Avatar color="green" fallback="Green" />
                  <Avatar color="red" fallback="Red" />
                  <Avatar color="purple" fallback="Purple" />
                  <Avatar color="gray" fallback="Gray" />
                </View>
              </View>

              {/* Shapes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Shapes
                </Text>
                <View style={[s.row, s.gap3]}>
                  <Avatar shape="circle" size="4" fallback="Circle" />
                  <Avatar shape="square" size="4" fallback="Square" />
                </View>
              </View>

              {/* With Image */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  With Image
                </Text>
                <View style={[s.row, s.gap3]}>
                  <Avatar size="4" src="https://github.com/shadcn.png" fallback="CN" />
                  <Avatar
                    size="4"
                    color="blue"
                    src="https://invalid-url.com/image.png"
                    fallback="Fallback"
                  />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Aspect Ratio Section */}
          <ComponentSection title="Aspect Ratio">
            <View style={[s.wFull, s.maxWMd]}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd' }}
                  style={[s.hFull, s.wFull, s.roundedMd]}
                  resizeMode="cover"
                />
              </AspectRatio>
            </View>
          </ComponentSection>

          {/* Skeleton Section */}
          <ComponentSection title="Skeleton">
            <View style={s.gap6}>
              {/* Avatar Skeletons */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Avatar Sizes
                </Text>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap3]}>
                  <Skeleton.Avatar size="0" />
                  <Skeleton.Avatar size="1" />
                  <Skeleton.Avatar size="2" />
                  <Skeleton.Avatar size="3" />
                  <Skeleton.Avatar size="4" />
                  <Skeleton.Avatar size="5" />
                  <Skeleton.Avatar size="6" />
                  <Skeleton.Avatar size="7" />
                  <Skeleton.Avatar size="8" />
                  <Skeleton.Avatar size="9" />
                </View>
              </View>

              {/* Avatar Shapes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Avatar Shapes
                </Text>
                <View style={[s.row, s.gap3]}>
                  <Skeleton.Avatar size="4" shape="circle" />
                  <Skeleton.Avatar size="4" shape="square" />
                </View>
              </View>

              {/* Text Skeletons */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Text Sizes
                </Text>
                <View style={s.gap2}>
                  <Skeleton.Text size="0" style={{ width: '60%' }} />
                  <Skeleton.Text size="1" style={{ width: '60%' }} />
                  <Skeleton.Text size="2" style={{ width: '80%' }} />
                  <Skeleton.Text size="3" style={{ width: '100%' }} />
                  <Skeleton.Text size="4" style={{ width: '70%' }} />
                  <Skeleton.Text size="5" style={{ width: '50%' }} />
                  <Skeleton.Text size="6" style={{ width: '50%' }} />
                  <Skeleton.Text size="7" style={{ width: '70%' }} />
                  <Skeleton.Text size="8" style={{ width: '65%' }} />
                  <Skeleton.Text size="9" style={{ width: '25%' }} />
                </View>
              </View>

              {/* Rect Skeletons */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Rectangles
                </Text>
                <View style={s.gap3}>
                  <Skeleton.Rect style={{ width: 200, height: 120, borderRadius: 8 }} />
                  <Skeleton.Rect style={{ width: '100%', height: 16, borderRadius: 4 }} />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View style={[s.row, s.wrap, s.gap3]}>
                  <Skeleton.Avatar color="gray" />
                  <Skeleton.Avatar color="blue" />
                  <Skeleton.Avatar color="green" />
                  <Skeleton.Avatar color="red" />
                  <Skeleton.Avatar color="purple" />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Accordion Section */}
          <ComponentSection title="Accordion">
            <View style={{ gap: 24 }}>
              {/* Single */}
              <View style={{ gap: 8 }}>
                <Text size="2" weight="medium" color="gray">
                  Single
                </Text>
                <Accordion.Root type="single" defaultValue="item-1">
                  <View style={{ gap: 16 }}>
                    <Accordion.Item value="item-1">
                      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                      <Accordion.Content>
                        <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                      </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-2">
                      <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
                      <Accordion.Content>
                        <Text>
                          Yes. It's unstyled by default, giving you freedom over the look and feel.
                        </Text>
                      </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-3">
                      <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
                      <Accordion.Content>
                        <Text>Yes! You can animate the Accordion with CSS or JavaScript.</Text>
                      </Accordion.Content>
                    </Accordion.Item>
                  </View>
                </Accordion.Root>
              </View>

              {/* Multiple */}
              <View style={{ gap: 8 }}>
                <Text size="2" weight="medium" color="gray">
                  Multiple
                </Text>
                <Accordion.Root type="multiple" defaultValue={['item-1', 'item-2']}>
                  <View style={{ gap: 16 }}>
                    <Accordion.Item value="item-1">
                      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                      <Accordion.Content>
                        <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                      </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-2">
                      <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
                      <Accordion.Content>
                        <Text>
                          Yes. It's unstyled by default, giving you freedom over the look and feel.
                        </Text>
                      </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value="item-3">
                      <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
                      <Accordion.Content>
                        <Text>Yes! You can animate the Accordion with CSS or JavaScript.</Text>
                      </Accordion.Content>
                    </Accordion.Item>
                  </View>
                </Accordion.Root>
              </View>
            </View>
          </ComponentSection>

          {/* Tabs Section */}
          <ComponentSection title="Tabs">
            <TabsDemo />
          </ComponentSection>

          {/* SegmentedControl Section */}
          <ComponentSection title="SegmentedControl">
            <SegmentedControlDemo />
          </ComponentSection>

          {/* Dialog Section */}
          <ComponentSection title="Dialog">
            <View style={s.gap4}>
              {/* Default Demo */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Default
                </Text>
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button>
                      <Text>Edit profile</Text>
                    </Button>
                  </Dialog.Trigger>
                  <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description>Make changes to your profile.</Dialog.Description>
                    <View style={{ gap: 12 }}>
                      <View>
                        <Text size="2" weight="bold" style={{ marginBottom: 4 }}>
                          Name
                        </Text>
                        <TextField.Root>
                          <TextField.Input
                            defaultValue="Freja Johnsen"
                            placeholder="Enter your full name"
                          />
                        </TextField.Root>
                      </View>
                      <View>
                        <Text size="2" weight="bold" style={{ marginBottom: 4 }}>
                          Email
                        </Text>
                        <TextField.Root>
                          <TextField.Input
                            defaultValue="freja@example.com"
                            placeholder="Enter your email"
                          />
                        </TextField.Root>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 12,
                        marginTop: 16,
                        justifyContent: 'flex-end',
                      }}>
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          <Text>Cancel</Text>
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close>
                        <Button>
                          <Text>Save</Text>
                        </Button>
                      </Dialog.Close>
                    </View>
                  </Dialog.Content>
                </Dialog.Root>
              </View>

              {/* Sizes Demo */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View style={[s.row, s.wrap, s.gap3]}>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button>
                        <Text>Size 1</Text>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="1" style={{ maxWidth: 350 }}>
                      <Dialog.Title>Edit profile</Dialog.Title>
                      <Dialog.Description>Make changes to your profile.</Dialog.Description>
                      <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
                        <Dialog.Close>
                          <Button size="1" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button size="1">
                            <Text>Save</Text>
                          </Button>
                        </Dialog.Close>
                      </View>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button>
                        <Text>Size 2</Text>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="2" style={{ maxWidth: 350 }}>
                      <Dialog.Title>Edit profile</Dialog.Title>
                      <Dialog.Description>Make changes to your profile.</Dialog.Description>
                      <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
                        <Dialog.Close>
                          <Button size="2" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button size="2" variant="solid">
                            <Text>Save</Text>
                          </Button>
                        </Dialog.Close>
                      </View>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button>
                        <Text>Size 3</Text>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="3" style={{ maxWidth: 350 }}>
                      <Dialog.Title>Edit profile</Dialog.Title>
                      <Dialog.Description>Make changes to your profile.</Dialog.Description>
                      <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'flex-end' }}>
                        <Dialog.Close>
                          <Button size="2" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button size="2" variant="solid">
                            <Text>Save</Text>
                          </Button>
                        </Dialog.Close>
                      </View>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button>
                        <Text>Size 4</Text>
                      </Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="4" style={{ maxWidth: 350 }}>
                      <Dialog.Title>Edit profile</Dialog.Title>
                      <Dialog.Description>Make changes to your profile.</Dialog.Description>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 12,
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        }}>
                        <Dialog.Close>
                          <Button size="3" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button size="3" variant="solid">
                            <Text>Save</Text>
                          </Button>
                        </Dialog.Close>
                      </View>
                    </Dialog.Content>
                  </Dialog.Root>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Alert Dialog Section */}
          <ComponentSection title="Alert Dialog">
            <View style={s.gap4}>
              {/* Default Demo */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Default
                </Text>
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button variant="solid" color="red">
                      <Text>Revoke access</Text>
                    </Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content style={{ maxWidth: 450 }}>
                    <AlertDialog.Title>Revoke access</AlertDialog.Title>
                    <AlertDialog.Description>
                      Are you sure? This application will no longer be accessible and any existing
                      sessions will be expired.
                    </AlertDialog.Description>
                    <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'flex-end' }}>
                      <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                          <Text>Cancel</Text>
                        </Button>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action>
                        <Button variant="solid" color="danger">
                          <Text>Revoke access</Text>
                        </Button>
                      </AlertDialog.Action>
                    </View>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </View>

              {/* Sizes Demo */}
              <View style={s.gap2}>
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View style={[s.row, s.wrap, s.gap3]}>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button color="red">
                        <Text>Size 1</Text>
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="1" style={{ maxWidth: 350 }}>
                      <AlertDialog.Title>Revoke access</AlertDialog.Title>
                      <AlertDialog.Description>
                        Are you sure? This application will no longer be accessible.
                      </AlertDialog.Description>
                      <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel>
                          <Button size="1" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button size="1" color="red">
                            <Text>Revoke</Text>
                          </Button>
                        </AlertDialog.Action>
                      </View>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button color="red">
                        <Text>Size 2</Text>
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="2" style={{ maxWidth: 350 }}>
                      <AlertDialog.Title>Revoke access</AlertDialog.Title>
                      <AlertDialog.Description>
                        Are you sure? This application will no longer be accessible.
                      </AlertDialog.Description>
                      <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel>
                          <Button size="2" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button size="2" color="red">
                            <Text>Revoke</Text>
                          </Button>
                        </AlertDialog.Action>
                      </View>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button color="red">
                        <Text>Size 3</Text>
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="3" style={{ maxWidth: 350 }}>
                      <AlertDialog.Title>Revoke access</AlertDialog.Title>
                      <AlertDialog.Description>
                        Are you sure? This application will no longer be accessible.
                      </AlertDialog.Description>
                      <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel>
                          <Button size="2" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button size="2" color="red">
                            <Text>Revoke</Text>
                          </Button>
                        </AlertDialog.Action>
                      </View>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button color="red">
                        <Text>Size 4</Text>
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="4" style={{ maxWidth: 350 }}>
                      <AlertDialog.Title>Revoke access</AlertDialog.Title>
                      <AlertDialog.Description>
                        Are you sure? This application will no longer be accessible.
                      </AlertDialog.Description>
                      <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel>
                          <Button size="3" variant="soft" color="gray">
                            <Text>Cancel</Text>
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button size="3" color="red">
                            <Text>Revoke</Text>
                          </Button>
                        </AlertDialog.Action>
                      </View>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Popover Section */}
          <ComponentSection title="Popover">
            <View style={s.gap6}>
              {/* Default (translucent, size 2) */}
              <View style={s.gap2}>
                <Text size="2" weight="medium" color="gray">
                  Default (translucent)
                </Text>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <Button variant="surface">
                      <Text>Open Popover</Text>
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content>
                    <View style={{ gap: 16 }}>
                      <View style={{ gap: 8 }}>
                        <Text size="1" weight="semi-bold" color="gray">
                          Dimensions
                        </Text>
                        <Text>Set the dimensions for the layer.</Text>
                      </View>
                      <View style={{ gap: 8 }}>
                        <Label nativeID="width">Width</Label>
                        <TextField.Root size="2">
                          <TextField.Input placeholder="100%" aria-labelledby="width" />
                        </TextField.Root>
                      </View>
                      <View style={{ gap: 8 }}>
                        <Label nativeID="height">Height</Label>
                        <TextField.Root size="2">
                          <TextField.Input placeholder="25px" aria-labelledby="height" />
                        </TextField.Root>
                      </View>
                    </View>
                  </Popover.Content>
                </Popover.Root>
              </View>

              {/* Solid variant */}
              <View style={s.gap2}>
                <Text size="2" weight="medium" color="gray">
                  Solid variant
                </Text>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <Button variant="soft">
                      <Text>Solid Popover</Text>
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content variant="solid">
                    <View style={{ gap: 8 }}>
                      <Text weight="medium">Solid Background</Text>
                      <Text size="2" color="gray">
                        This popover has a solid background without backdrop blur.
                      </Text>
                    </View>
                  </Popover.Content>
                </Popover.Root>
              </View>

              {/* Sizes */}
              <View style={s.gap2}>
                <Text size="2" weight="medium" color="gray">
                  Sizes
                </Text>
                <View style={[s.row, s.wrap, s.gap4]}>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Button variant="soft" size="1">
                        <Text>Size 1</Text>
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="1">
                      <Text size="1">Small popover content.</Text>
                    </Popover.Content>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Button variant="soft" size="2">
                        <Text>Size 2</Text>
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="2">
                      <Text size="2">Medium popover content.</Text>
                    </Popover.Content>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Button variant="soft" size="3">
                        <Text>Size 3</Text>
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="3">
                      <Text size="3">Large popover content.</Text>
                    </Popover.Content>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Button variant="soft" size="4">
                        <Text>Size 4</Text>
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="4">
                      <Text size="4">Extra large popover content.</Text>
                    </Popover.Content>
                  </Popover.Root>
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Dropdown Menu Section */}
          <ComponentSection title="Dropdown Menu">
            <View style={s.gap6}>
              {/* Default Demo */}
              <View style={s.gap3}>
                <SectionLabel>Default</SectionLabel>
                <DropdownMenuDefaultDemo />
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap3]}>
                  <DropdownMenuSizeDemo size="1" label="Small" />
                  <DropdownMenuSizeDemo size="2" label="Default" />
                  <DropdownMenuSizeDemo size="3" label="Large" />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Item Colors</SectionLabel>
                <DropdownMenuColorDemo />
              </View>

              {/* With Submenu */}
              <View style={s.gap3}>
                <SectionLabel>With Submenu</SectionLabel>
                <DropdownMenuWithSubmenuDemo />
              </View>
            </View>
          </ComponentSection>

          {/* Select Section */}
          <ComponentSection title="Select">
            <View style={s.gap6}>
              <View style={s.gap3}>
                <SectionLabel>Variants - Default</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectDemo variant="surface" />
                  <SelectDemo variant="soft" />
                  <SelectDemo variant="ghost" />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Green</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectDemo variant="surface" color="green" />
                  <SelectDemo variant="soft" color="green" />
                  <SelectDemo variant="ghost" color="green" />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Red</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectDemo variant="surface" color="red" />
                  <SelectDemo variant="soft" color="red" />
                  <SelectDemo variant="ghost" color="red" />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Variants - Purple</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectDemo variant="surface" color="purple" />
                  <SelectDemo variant="soft" color="purple" />
                  <SelectDemo variant="ghost" color="purple" />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Select Sizes</SectionLabel>
                <View style={[s.row, s.wrap, s.itemsCenter, s.gap2]}>
                  <SelectDemo size="1" />
                  <SelectDemo size="2" />
                  <SelectDemo size="3" />
                  <SelectDemo size="4" />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Disabled State</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectDemo variant="surface" color="blue" disabled />
                  <SelectDemo variant="soft" color="blue" disabled />
                  <SelectDemo variant="ghost" color="blue" disabled />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>Many Options (Scrollable)</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectManyOptionsDemo />
                </View>
              </View>

              <View style={s.gap3}>
                <SectionLabel>With Groups, Labels &amp; Separators</SectionLabel>
                <View style={[s.row, s.wrap, s.gap2]}>
                  <SelectGroupedDemo />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Context Menu Section */}
          <ComponentSection title="Context Menu">
            <View style={s.gap6}>
              {/* Default Demo */}
              <View style={s.gap3}>
                <SectionLabel>Default</SectionLabel>
                <ContextMenuDefaultDemo />
              </View>

              {/* Sizes */}
              <View style={s.gap3}>
                <SectionLabel>Sizes</SectionLabel>
                <View style={s.gap3}>
                  <ContextMenuSizeDemo size="1" label="Small" />
                  <ContextMenuSizeDemo size="2" label="Default" />
                  <ContextMenuSizeDemo size="3" label="Large" />
                </View>
              </View>

              {/* Colors */}
              <View style={s.gap3}>
                <SectionLabel>Item Colors</SectionLabel>
                <ContextMenuColorDemo />
              </View>
            </View>
          </ComponentSection>

          {/* Hover Card Section */}
          <ComponentSection title="Hover Card">
            <HoverCardDemo />
          </ComponentSection>

          {/* Tooltip Section */}
          <ComponentSection title="Tooltip">
            <View style={[s.row, s.gap4]}>
              <Tooltip content="Add to library">
                <Button variant="surface">
                  <Text>Hover me</Text>
                </Button>
              </Tooltip>

              <Tooltip content="This is a longer tooltip message" side="bottom">
                <Button variant="soft">
                  <Text>Bottom tooltip</Text>
                </Button>
              </Tooltip>

              <Tooltip content="Quick tip!" delayDuration={100}>
                <Button variant="ghost">
                  <Text>Fast tooltip</Text>
                </Button>
              </Tooltip>
            </View>
          </ComponentSection>

          {/* Bottom padding for scroll */}
          <View style={s.h8} />
        </View>
      </ScrollView>
    </>
  );
}

// Helper Components
function ComponentSection({ title, children }: { title: string; children: React.ReactNode }) {
  const { colors, isDark } = useThemeTokens();
  return (
    <View style={s.gap4}>
      <View style={[s.row, s.itemsCenter, s.gap2]}>
        <Icon as={ChevronRightIcon} color={colors.palettes.gray['12']} />
        <Heading size="3">{title}</Heading>
      </View>
      <Card style={isDark ? { backgroundColor: colors.background } : undefined}>{children}</Card>
    </View>
  );
}

function SectionLabel({ children }: { children: string }) {
  const { colors } = useThemeTokens();
  return (
    <Text weight="semi-bold" style={{ color: colors.palettes.gray.a10 }}>
      {children}
    </Text>
  );
}

function ContextMenuTriggerBox({
  children,
  height = 80,
}: {
  children: React.ReactNode;
  height?: number;
}) {
  const { colors } = useThemeTokens();
  return (
    <View
      style={{
        height,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.stroke,
      }}>
      <Text size="1" style={{ color: colors.palettes.gray.a10 }}>
        {children}
      </Text>
    </View>
  );
}

function CheckboxItem({
  label,
  defaultChecked = false,
  size,
  color,
  disabled = false,
}: {
  label: string;
  defaultChecked?: boolean;
  size?: '1' | '2' | '3';
  color?: 'blue' | 'green' | 'red' | 'purple' | 'yellow';
  disabled?: boolean;
}) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return (
    <View style={[s.row, s.itemsCenter, s.gap2]}>
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        size={size}
        color={color}
        disabled={disabled}
      />
      <Label
        onPress={() => !disabled && setChecked((prev) => !prev)}
        nativeID={label.replace(/\s+/g, '-').toLowerCase()}>
        {label}
      </Label>
    </View>
  );
}

function RadioGroupDemo({
  size,
  color,
}: {
  size?: '1' | '2' | '3';
  color?: 'blue' | 'green' | 'red' | 'purple';
}) {
  const [value, setValue] = React.useState('option1');
  const id = `radio-${size}-${color}`;
  return (
    <RadioGroup.Root value={value} onValueChange={setValue} size={size} color={color}>
      <View style={s.gap2}>
        <View style={[s.row, s.itemsCenter, s.gap2]}>
          <RadioGroup.Item aria-labelledby={`${id}-1`} value="option1" />
          <Label nativeID={`${id}-1`} onPress={() => setValue('option1')}>
            Option 1
          </Label>
        </View>
        <View style={[s.row, s.itemsCenter, s.gap2]}>
          <RadioGroup.Item aria-labelledby={`${id}-2`} value="option2" />
          <Label nativeID={`${id}-2`} onPress={() => setValue('option2')}>
            Option 2
          </Label>
        </View>
      </View>
    </RadioGroup.Root>
  );
}

function ListWithSwitchDemo() {
  const [pushEnabled, setPushEnabled] = React.useState(true);
  const [emailEnabled, setEmailEnabled] = React.useState(false);

  return (
    <List.Root variant="soft">
      <List.Item>
        <List.ItemSlot>
          <Icon as={BellIcon} size={20} />
        </List.ItemSlot>
        <List.ItemContent>
          <List.ItemTitle>Push Notifications</List.ItemTitle>
        </List.ItemContent>
        <List.ItemSlot>
          <Switch checked={pushEnabled} onCheckedChange={setPushEnabled} />
        </List.ItemSlot>
      </List.Item>
      <List.Separator />
      <List.Item>
        <List.ItemSlot>
          <Icon as={MailIcon} size={20} />
        </List.ItemSlot>
        <List.ItemContent>
          <List.ItemTitle>Email Updates</List.ItemTitle>
        </List.ItemContent>
        <List.ItemSlot>
          <Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} />
        </List.ItemSlot>
      </List.Item>
    </List.Root>
  );
}

function SwitchItem({
  label,
  defaultChecked = false,
  disabled = false,
  size,
  color,
}: {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: '1' | '2' | '3';
  color?: 'blue' | 'green' | 'red' | 'purple' | 'gray';
}) {
  const [checked, setChecked] = React.useState(defaultChecked);
  const id = label?.replace(/\s+/g, '-').toLowerCase();
  return (
    <View style={[s.row, s.itemsCenter, s.gap3]}>
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        disabled={disabled}
        size={size}
        color={color}
        aria-labelledby={id}
      />
      {label && <Label nativeID={id}>{label}</Label>}
    </View>
  );
}

function SelectDemo({
  size,
  variant,
  color,
  disabled,
}: {
  size?: '1' | '2' | '3' | '4';
  variant?: 'surface' | 'soft' | 'ghost';
  color?: 'blue' | 'green' | 'red' | 'purple' | 'yellow';
  disabled?: boolean;
}) {
  const [value, setValue] = React.useState<{ value: string; label: string } | undefined>();
  return (
    <Select.Root size={size} value={value} onValueChange={setValue}>
      <Select.Trigger variant={variant} color={color} disabled={disabled}>
        <Select.Value placeholder="Select a framework" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="next" label="Next.js">
          Next.js
        </Select.Item>
        <Select.Item value="react" label="React">
          React
        </Select.Item>
        <Select.Item value="vue" label="Vue">
          Vue
        </Select.Item>
        <Select.Item value="svelte" label="Svelte">
          Svelte
        </Select.Item>
        <Select.Item value="angular" label="Angular">
          Angular
        </Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

function SelectManyOptionsDemo() {
  const [value, setValue] = React.useState<{ value: string; label: string } | undefined>();
  const options = Array.from({ length: 40 }, (_, i) => ({
    value: `option-${i + 1}`,
    label: `Option ${i + 1}`,
  }));

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger>
        <Select.Value placeholder="Select an option" />
      </Select.Trigger>
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.value} value={option.value} label={option.label}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

function SelectGroupedDemo() {
  const [value, setValue] = React.useState<{ value: string; label: string } | undefined>();

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger>
        <Select.Value placeholder="Select a food" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple" label="Apple">
            Apple
          </Select.Item>
          <Select.Item value="banana" label="Banana">
            Banana
          </Select.Item>
          <Select.Item value="orange" label="Orange">
            Orange
          </Select.Item>
        </Select.Group>

        <Select.Separator />

        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot" label="Carrot">
            Carrot
          </Select.Item>
          <Select.Item value="broccoli" label="Broccoli">
            Broccoli
          </Select.Item>
          <Select.Item value="spinach" label="Spinach">
            Spinach
          </Select.Item>
        </Select.Group>

        <Select.Separator />

        <Select.Group>
          <Select.Label>Proteins</Select.Label>
          <Select.Item value="chicken" label="Chicken">
            Chicken
          </Select.Item>
          <Select.Item value="beef" label="Beef">
            Beef
          </Select.Item>
          <Select.Item value="fish" label="Fish">
            Fish
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

function TabsDemo() {
  const [value1, setValue1] = React.useState('account');
  const [value2, setValue2] = React.useState('tab1');

  return (
    <View style={s.gap6}>
      {/* Sizes */}
      <View style={s.gap2}>
        <Text size="2" weight="medium">
          Sizes
        </Text>
        <View style={s.gap4}>
          <Tabs.Root size="1" value={value2} onValueChange={setValue2}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <Tabs.Root size="2" value={value2} onValueChange={setValue2}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </View>
      </View>

      {/* Colors */}
      <View style={s.gap2}>
        <Text size="2" weight="medium">
          Colors
        </Text>
        <View style={s.gap4}>
          <Tabs.Root color="blue" value={value2} onValueChange={setValue2}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Blue</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <Tabs.Root color="purple" value={value2} onValueChange={setValue2}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Purple</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <Tabs.Root color="green" value={value2} onValueChange={setValue2}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Green</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <Tabs.Root color="orange" value={value2} onValueChange={setValue2}>
            <Tabs.List>
              <Tabs.Trigger value="tab1">Orange</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </View>
      </View>

      {/* Full Example */}
      <View style={s.gap2}>
        <Text size="2" weight="medium">
          Full Example
        </Text>
        <Tabs.Root value={value1} onValueChange={setValue1}>
          <Tabs.List>
            <Tabs.Trigger value="account">
              <Text>Account</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="password">
              <Text>Password</Text>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account" style={s.p4}>
            <View style={s.gap6}>
              <View style={s.gap1_5}>
                <Heading size="3">Account</Heading>
                <Text color="gray">
                  Make changes to your account here. Click save when you're done.
                </Text>
              </View>
              <View style={s.gap4}>
                <View style={s.gap2}>
                  <Label nativeID="name">Name</Label>
                  <TextField.Root size="2">
                    <TextField.Input placeholder="Enter your name" aria-labelledby="name" />
                  </TextField.Root>
                </View>
                <View style={s.gap2}>
                  <Label nativeID="username">Username</Label>
                  <TextField.Root size="2">
                    <TextField.Input placeholder="Enter your username" aria-labelledby="username" />
                  </TextField.Root>
                </View>
              </View>
              <View style={[s.row, s.itemsCenter]}>
                <Button>
                  <Text>Save changes</Text>
                </Button>
              </View>
            </View>
          </Tabs.Content>
          <Tabs.Content value="password" style={s.p4}>
            <View style={s.gap6}>
              <View style={s.gap1_5}>
                <Heading size="3">Password</Heading>
                <Text color="gray">
                  Change your password here. After saving, you'll be logged out.
                </Text>
              </View>
              <View style={s.gap4}>
                <View style={s.gap2}>
                  <Label nativeID="current">Current password</Label>
                  <TextField.Root size="2">
                    <TextField.Input
                      placeholder="Enter current password"
                      secureTextEntry
                      aria-labelledby="current"
                    />
                  </TextField.Root>
                </View>
                <View style={s.gap2}>
                  <Label nativeID="new">New password</Label>
                  <TextField.Root size="2">
                    <TextField.Input
                      placeholder="Enter new password"
                      secureTextEntry
                      aria-labelledby="new"
                    />
                  </TextField.Root>
                </View>
              </View>
              <View style={[s.row, s.itemsCenter]}>
                <Button>
                  <Text>Save password</Text>
                </Button>
              </View>
            </View>
          </Tabs.Content>
        </Tabs.Root>
      </View>
    </View>
  );
}

function SegmentedControlDemo() {
  const [value, setValue] = React.useState('account');

  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.List>
        <SegmentedControl.Trigger value="account">Account</SegmentedControl.Trigger>
        <SegmentedControl.Trigger value="documents">Documents</SegmentedControl.Trigger>
        <SegmentedControl.Trigger value="settings">Settings</SegmentedControl.Trigger>
      </SegmentedControl.List>

      <View style={{ paddingTop: 12, paddingHorizontal: 4 }}>
        <SegmentedControl.Content value="account">
          <Text size="2">Your account.</Text>
        </SegmentedControl.Content>

        <SegmentedControl.Content value="documents">
          <Text size="2">Your documents.</Text>
        </SegmentedControl.Content>

        <SegmentedControl.Content value="settings">
          <Text size="2">Your settings.</Text>
        </SegmentedControl.Content>
      </View>
    </SegmentedControl.Root>
  );
}

function ContextMenuDefaultDemo() {
  type Order = 'ascending' | 'descending';
  const [order, setOrder] = React.useState<Order>('ascending');
  const [showHiddenFiles, setShowHiddenFiles] = React.useState(true);

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <ContextMenuTriggerBox height={128}>Right click / Long press here</ContextMenuTriggerBox>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Actions</ContextMenu.Label>
        <ContextMenu.Item>Edit</ContextMenu.Item>
        <ContextMenu.Item>Duplicate</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Archive</ContextMenu.Item>

        <ContextMenu.Separator />
        <ContextMenu.RadioGroup value={order} onValueChange={(value) => setOrder(value as Order)}>
          <ContextMenu.RadioItem value="ascending">Ascending</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="descending">Descending</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
        <ContextMenu.Separator />

        <ContextMenu.CheckboxItem checked={showHiddenFiles} onCheckedChange={setShowHiddenFiles}>
          Show hidden files
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.Item color="danger">Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

function ContextMenuSizeDemo({ size, label }: { size: '1' | '2' | '3'; label: string }) {
  type Order = 'ascending' | 'descending';
  const [order, setOrder] = React.useState<Order>('ascending');
  const [showHiddenFiles, setShowHiddenFiles] = React.useState(true);

  return (
    <ContextMenu.Root size={size}>
      <ContextMenu.Trigger>
        <ContextMenuTriggerBox>{label} - Right click / Long press</ContextMenuTriggerBox>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Actions</ContextMenu.Label>
        <ContextMenu.Item>Edit</ContextMenu.Item>
        <ContextMenu.Item>Duplicate</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Archive</ContextMenu.Item>

        <ContextMenu.Separator />
        <ContextMenu.RadioGroup value={order} onValueChange={(value) => setOrder(value as Order)}>
          <ContextMenu.RadioItem value="ascending">Ascending</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="descending">Descending</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
        <ContextMenu.Separator />

        <ContextMenu.CheckboxItem checked={showHiddenFiles} onCheckedChange={setShowHiddenFiles}>
          Show hidden files
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.Item color="danger">Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

function ContextMenuColorDemo() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <ContextMenuTriggerBox>Right click / Long press here</ContextMenuTriggerBox>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item color="blue">Edit (info)</ContextMenu.Item>
        <ContextMenu.Item color="green">Duplicate (success)</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item color="danger">Archive (danger)</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

function DropdownMenuDefaultDemo() {
  type Order = 'ascending' | 'descending';
  const [order, setOrder] = React.useState<Order>('ascending');
  const [showHiddenFiles, setShowHiddenFiles] = React.useState(true);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="soft">
          <Text>Options</Text>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Archive</DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.RadioGroup value={order} onValueChange={(value) => setOrder(value as Order)}>
          <DropdownMenu.RadioItem value="ascending">Ascending</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="descending">Descending</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
        <DropdownMenu.Separator />

        <DropdownMenu.CheckboxItem checked={showHiddenFiles} onCheckedChange={setShowHiddenFiles}>
          Show hidden files
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.Separator />

        <DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function DropdownMenuSizeDemo({ size, label }: { size: '1' | '2' | '3'; label: string }) {
  type Order = 'ascending' | 'descending';
  const [order, setOrder] = React.useState<Order>('ascending');
  const [showHiddenFiles, setShowHiddenFiles] = React.useState(true);

  return (
    <DropdownMenu.Root size={size}>
      <DropdownMenu.Trigger asChild>
        <Button variant="soft" size={size === '1' ? '1' : size === '2' ? '2' : '3'}>
          <Text>{label}</Text>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Archive</DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.RadioGroup value={order} onValueChange={(value) => setOrder(value as Order)}>
          <DropdownMenu.RadioItem value="ascending">Ascending</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="descending">Descending</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
        <DropdownMenu.Separator />

        <DropdownMenu.CheckboxItem checked={showHiddenFiles} onCheckedChange={setShowHiddenFiles}>
          Show hidden files
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.Separator />

        <DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function DropdownMenuColorDemo() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="soft" color="gray">
          <Text>Options</Text>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item color="blue">Edit (info)</DropdownMenu.Item>
        <DropdownMenu.Item color="green">Duplicate (success)</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="danger">Archive (danger)</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function DropdownMenuWithSubmenuDemo() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="soft">
          <Text>Options</Text>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function HoverCardDemo() {
  return (
    <View style={s.gap6}>
      {/* Default (translucent, size 2) */}
      <View style={s.gap2}>
        <Text size="2" weight="medium" color="gray">
          Default (translucent)
        </Text>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Button variant="ghost">
              <Text>@nextjs</Text>
            </Button>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <Avatar size="3" fallback="Next.js" />
              <View style={{ gap: 4 }}>
                <Text size="1" weight="semi-bold" color="gray">
                  @nextjs
                </Text>
                <Text>The React Framework – created and maintained by @vercel.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingTop: 8 }}>
                  <Icon as={CalendarIcon} size={12} />
                  <Text size="2">Joined December 2021</Text>
                </View>
              </View>
            </View>
          </HoverCard.Content>
        </HoverCard.Root>
      </View>

      {/* Solid variant */}
      <View style={s.gap2}>
        <Text size="2" weight="medium" color="gray">
          Solid variant
        </Text>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Button variant="ghost">
              <Text>@radix</Text>
            </Button>
          </HoverCard.Trigger>
          <HoverCard.Content variant="solid">
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <Avatar size="3" fallback="R" color="violet" />
              <View style={{ gap: 4 }}>
                <Text size="1" weight="semi-bold" color="gray">
                  @radix
                </Text>
                <Text>Unstyled, accessible UI components for React.</Text>
              </View>
            </View>
          </HoverCard.Content>
        </HoverCard.Root>
      </View>

      {/* Sizes */}
      <View style={s.gap2}>
        <Text size="2" weight="medium" color="gray">
          Sizes
        </Text>
        <View style={[s.row, s.gap4]}>
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <Button variant="soft" size="1">
                <Text>Size 1</Text>
              </Button>
            </HoverCard.Trigger>
            <HoverCard.Content size="1">
              <Text size="1">Small hover card content with size 1.</Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <Button variant="soft" size="2">
                <Text>Size 2</Text>
              </Button>
            </HoverCard.Trigger>
            <HoverCard.Content size="2">
              <Text size="2">Medium hover card content with size 2.</Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <Button variant="soft" size="3">
                <Text>Size 3</Text>
              </Button>
            </HoverCard.Trigger>
            <HoverCard.Content size="3">
              <Text size="3">Large hover card content with size 3.</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </View>
      </View>
    </View>
  );
}
