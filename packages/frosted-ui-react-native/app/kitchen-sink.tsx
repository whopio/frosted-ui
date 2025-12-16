import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { Heading } from '@/components/ui/heading';
import { HoverCard } from '@/components/ui/hover-card';
import { Icon } from '@/components/ui/icon';
import { IconButton } from '@/components/ui/icon-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Popover } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadioGroup } from '@/components/ui/radio-group';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { Select } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { Tabs } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { TextArea } from '@/components/ui/text-area';
import { TextField } from '@/components/ui/text-field';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip } from '@/components/ui/tooltip';
import { Stack } from 'expo-router';
import {
  AlertCircleIcon,
  BellIcon,
  BoldIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CreditCardIcon,
  InfoIcon,
  ItalicIcon,
  MailIcon,
  MoonStarIcon,
  MoreVertical,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  UnderlineIcon,
  UserIcon,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, ScrollView, View } from 'react-native';

const HEADING_SIZES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const TEXT_SIZES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const TEXT_WEIGHTS = ['light', 'regular', 'medium', 'semi-bold', 'bold'] as const;

const SCREEN_OPTIONS = {
  title: 'Component Kitchen Sink',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

export default function KitchenSinkScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView className="flex-1 bg-background">
        <View className="gap-8 p-4 pt-24">
          {/* Typography Section */}
          <ComponentSection title="Typography">
            <View className="gap-4">
              <View className="gap-2">
                {HEADING_SIZES.map((size) => (
                  <Heading key={size} size={size}>
                    Heading size {size}
                  </Heading>
                ))}
              </View>
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Heading Colors
                </Text>
                <Heading color="blue">Heading with blue color</Heading>
                <Heading color="yellow">Heading with yellow color</Heading>
                <Heading color="green">Heading with green color</Heading>
                <Heading color="red">Heading with red color</Heading>
                <Heading color="purple">Heading with purple color</Heading>
                <Heading color="orange">Heading with orange color</Heading>
              </View>
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Text Sizes
                </Text>
                {TEXT_SIZES.map((size) => (
                  <Text key={size} size={size}>
                    Text size {size}
                  </Text>
                ))}
              </View>
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Text Weights
                </Text>
                {TEXT_WEIGHTS.map((weight) => (
                  <Text key={weight} weight={weight}>
                    Text weight {weight}
                  </Text>
                ))}
              </View>
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Text Colors
                </Text>
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

          {/* Buttons Section */}
          <ComponentSection title="Buttons">
            <View className="gap-6">
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Blue
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <Button variant="solid" color="blue">
                    <Text>Solid</Text>
                  </Button>
                  <Button variant="soft" color="blue">
                    <Text>Soft</Text>
                  </Button>
                  <Button variant="surface" color="blue">
                    <Text>Surface</Text>
                  </Button>
                  <Button variant="ghost" color="blue">
                    <Text>Ghost</Text>
                  </Button>
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Yellow
                </Text>
                <View className="flex-row flex-wrap gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Green
                </Text>
                <View className="flex-row flex-wrap gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Red
                </Text>
                <View className="flex-row flex-wrap gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Purple
                </Text>
                <View className="flex-row flex-wrap gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Button Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  With Icons
                </Text>
                <View className="flex-row flex-wrap gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Disabled State
                </Text>
                <View className="flex-row flex-wrap gap-2">
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
            <View className="gap-6">
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Blue
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <IconButton variant="solid" color="blue">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="soft" color="blue">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="surface" color="blue">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                  <IconButton variant="ghost" color="blue">
                    <Icon as={SettingsIcon} size={16} />
                  </IconButton>
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Colors
                </Text>
                <View className="flex-row flex-wrap gap-2">
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

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Disabled State
                </Text>
                <View className="flex-row flex-wrap gap-2">
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
            <View className="gap-6">
              {/* Variants */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <Badge variant="solid" color="blue">
                    <Text>Solid</Text>
                  </Badge>
                  <Badge variant="soft" color="blue">
                    <Text>Soft</Text>
                  </Badge>
                  <Badge variant="surface" color="blue">
                    <Text>Surface</Text>
                  </Badge>
                  <Badge variant="outline" color="blue">
                    <Text>Outline</Text>
                  </Badge>
                </View>
              </View>

              {/* Colors */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Colors
                </Text>
                <View className="gap-2">
                  <View className="flex-row flex-wrap gap-2">
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
                  <View className="flex-row flex-wrap gap-2">
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
                  <View className="flex-row flex-wrap gap-2">
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
                  <View className="flex-row flex-wrap gap-2">
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
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Sizes
                </Text>
                <View className="flex-row flex-wrap gap-2">
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
            <View className="gap-4">
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Surface (default)
                </Text>
                <Card variant="surface">
                  <View className="gap-1.5">
                    <Heading size="3">Card Title</Heading>
                    <Text color="gray">Card description goes here</Text>
                  </View>
                </Card>
              </View>
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Soft
                </Text>
                <Card variant="soft">
                  <View className="gap-1.5">
                    <Heading size="3">Card Title</Heading>
                    <Text color="gray">Card description goes here</Text>
                  </View>
                </Card>
              </View>
              <View className="gap-2">
                <Text weight="semi-bold" className="text-gray-a10">
                  Ghost
                </Text>
                <Card variant="ghost">
                  <View className="gap-1.5">
                    <Heading size="3">Card Title</Heading>
                    <Text color="gray">Card description goes here</Text>
                  </View>
                </Card>
              </View>
            </View>
          </ComponentSection>

          {/* Callout Section */}
          <ComponentSection title="Callout">
            <View className="gap-6">
              {/* Variants */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants
                </Text>
                <Callout.Root variant="soft" color="blue">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Soft variant callout with helpful information.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root variant="surface" color="blue">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Surface variant callout with helpful information.</Text>
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root variant="outline" color="blue">
                  <Callout.Icon>
                    <Icon as={InfoIcon} />
                  </Callout.Icon>
                  <Callout.Text>
                    <Text>Outline variant callout with helpful information.</Text>
                  </Callout.Text>
                </Callout.Root>
              </View>

              {/* Colors */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Colors
                </Text>
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
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Sizes
                </Text>
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
            <View className="gap-6">
              {/* Variants */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Variants
                </Text>
                <TextField.Input placeholder="Surface variant (default)" />
                <TextField.Input variant="soft" placeholder="Soft variant" />
              </View>

              {/* Sizes */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Sizes
                </Text>
                <TextField.Input size="1" placeholder="Size 1" />
                <TextField.Input size="2" placeholder="Size 2 (default)" />
                <TextField.Input size="3" placeholder="Size 3" />
                <TextField.Input size="4" placeholder="Size 4" />
              </View>

              {/* Colors (soft variant) */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Colors (soft variant)
                </Text>
                <TextField.Input variant="soft" color="blue" placeholder="Blue" />
                <TextField.Input variant="soft" color="green" placeholder="Green" />
                <TextField.Input variant="soft" color="red" placeholder="Red" />
              </View>

              {/* With Slots - Size Story */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  With Slots
                </Text>
                <View className="flex-col gap-3">
                  {/* Size 1 */}
                  <View className="flex-row items-center gap-2">
                    <TextField.Root size="1" className="flex-1">
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
                  <View className="flex-row items-center gap-2">
                    <TextField.Root size="2" className="flex-1">
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
                  <View className="flex-row items-center gap-2">
                    <TextField.Root size="3" className="flex-1">
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
                  <View className="flex-row items-center gap-2">
                    <TextField.Root size="4" className="flex-1">
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
              <View className="gap-3">
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
            <View className="gap-6">
              {/* Variants */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Variants
                </Text>
                <TextArea placeholder="Surface variant (default)" />
                <TextArea variant="soft" placeholder="Soft variant" />
              </View>

              {/* Sizes */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Sizes
                </Text>
                <TextArea size="1" placeholder="Size 1" />
                <TextArea size="2" placeholder="Size 2 (default)" />
                <TextArea size="3" placeholder="Size 3" />
                <TextArea size="4" placeholder="Size 4" />
              </View>

              {/* Colors (soft variant) */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Colors (soft variant)
                </Text>
                <TextArea variant="soft" color="blue" placeholder="Blue" />
                <TextArea variant="soft" color="green" placeholder="Green" />
                <TextArea variant="soft" color="red" placeholder="Red" />
              </View>

              {/* Disabled */}
              <View className="gap-3">
                <Text size="2" weight="medium" color="gray">
                  Disabled
                </Text>
                <TextArea placeholder="Disabled (surface)" editable={false} />
                <TextArea variant="soft" placeholder="Disabled (soft)" editable={false} />
              </View>
            </View>
          </ComponentSection>

          {/* Form Inputs Section */}
          <ComponentSection title="Form Inputs (Legacy)">
            <View className="gap-4">
              <View className="gap-2">
                <Label nativeID="email">Email</Label>
                <Input placeholder="Enter your email" aria-labelledby="email" />
              </View>

              <View className="gap-2">
                <Label nativeID="disabled">Disabled Input</Label>
                <Input placeholder="Disabled input" editable={false} aria-labelledby="disabled" />
              </View>
            </View>
          </ComponentSection>

          {/* Checkbox Section */}
          <ComponentSection title="Checkbox">
            <View className="gap-6">
              {/* Sizes */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Sizes
                </Text>
                <View className="flex-row items-center gap-4">
                  <CheckboxItem label="Size 1" size="1" defaultChecked />
                  <CheckboxItem label="Size 2" size="2" defaultChecked />
                  <CheckboxItem label="Size 3" size="3" defaultChecked />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Colors
                </Text>
                <View className="flex-row flex-wrap gap-4">
                  <CheckboxItem label="Blue" color="blue" defaultChecked />
                  <CheckboxItem label="Green" color="green" defaultChecked />
                  <CheckboxItem label="Red" color="red" defaultChecked />
                  <CheckboxItem label="Purple" color="purple" defaultChecked />
                  <CheckboxItem label="Yellow" color="yellow" defaultChecked />
                </View>
              </View>

              {/* States */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  States
                </Text>
                <View className="gap-3">
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
            <View className="gap-6">
              {/* Sizes */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Sizes
                </Text>
                <View className="flex-row gap-6">
                  <RadioGroupDemo size="1" color="blue" />
                  <RadioGroupDemo size="2" color="blue" />
                  <RadioGroupDemo size="3" color="blue" />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Colors
                </Text>
                <View className="flex-row flex-wrap gap-6">
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
            <View className="gap-6">
              {/* Sizes */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View className="flex-row items-center gap-6">
                  <SwitchItem size="1" defaultChecked />
                  <SwitchItem size="2" defaultChecked />
                  <SwitchItem size="3" defaultChecked />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View className="flex-row flex-wrap gap-6">
                  <SwitchItem color="blue" defaultChecked />
                  <SwitchItem color="green" defaultChecked />
                  <SwitchItem color="red" defaultChecked />
                  <SwitchItem color="purple" defaultChecked />
                  <SwitchItem color="gray" defaultChecked />
                </View>
              </View>

              {/* States */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  States
                </Text>
                <View className="gap-3">
                  <SwitchItem label="Unchecked" />
                  <SwitchItem label="Checked" defaultChecked />
                  <SwitchItem label="Disabled unchecked" disabled />
                  <SwitchItem label="Disabled checked" disabled defaultChecked />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Toggle Section */}
          <ComponentSection title="Toggle">
            <View className="gap-4">
              <View className="flex-row flex-wrap gap-2">
                <ToggleSingleDemo />
              </View>

              <Text size="1" className="text-gray-a10">
                Toggle Group
              </Text>
              <ToggleGroupDemo />
            </View>
          </ComponentSection>

          {/* Separator Section */}
          <ComponentSection title="Separator">
            <View className="gap-6">
              {/* Default Demo */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Default
                </Text>
                <View>
                  <Text size="2">Tools for building high-quality, accessible UI.</Text>
                  <Separator size="4" style={{ marginVertical: 12 }} />
                  <View className="flex-row items-center gap-3">
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
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Sizes (Horizontal)
                </Text>
                <View className="gap-3">
                  <Separator size="1" />
                  <Separator size="2" />
                  <Separator size="3" />
                  <Separator size="4" />
                </View>
              </View>

              {/* Sizes - Vertical */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Sizes (Vertical)
                </Text>
                <View className="flex-row items-center gap-3" style={{ height: 64 }}>
                  <Separator size="1" orientation="vertical" />
                  <Separator size="2" orientation="vertical" />
                  <Separator size="3" orientation="vertical" />
                  <Separator size="4" orientation="vertical" />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View className="gap-3">
                  <Separator size="4" color="gray" />
                  <Separator size="4" color="blue" />
                  <Separator size="4" color="green" />
                  <Separator size="4" color="red" />
                  <Separator size="4" color="purple" />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Progress Section */}
          <ComponentSection title="Progress">
            <View className="gap-6">
              {/* Sizes */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View className="gap-3">
                  <Progress size="1" value={60} />
                  <Progress size="2" value={60} />
                  <Progress size="3" value={60} />
                  <Progress size="4" value={60} />
                  <Progress size="5" value={60} />
                  <Progress size="6" value={60} />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View className="gap-3">
                  <Progress size="3" color="blue" value={60} />
                  <Progress size="3" color="green" value={60} />
                  <Progress size="3" color="red" value={60} />
                  <Progress size="3" color="purple" value={60} />
                  <Progress size="3" color="gray" value={60} />
                </View>
              </View>

              {/* Values */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Values
                </Text>
                <View className="gap-3">
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
            <View className="gap-6">
              {/* Sizes */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-3">
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
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View className="flex-row flex-wrap gap-3">
                  <Avatar color="blue" fallback="Blue" />
                  <Avatar color="green" fallback="Green" />
                  <Avatar color="red" fallback="Red" />
                  <Avatar color="purple" fallback="Purple" />
                  <Avatar color="gray" fallback="Gray" />
                </View>
              </View>

              {/* Shapes */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Shapes
                </Text>
                <View className="flex-row gap-3">
                  <Avatar shape="circle" size="4" fallback="Circle" />
                  <Avatar shape="square" size="4" fallback="Square" />
                </View>
              </View>

              {/* With Image */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  With Image
                </Text>
                <View className="flex-row gap-3">
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
            <View className="w-full max-w-md">
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd' }}
                  className="h-full w-full rounded-md"
                  resizeMode="cover"
                />
              </AspectRatio>
            </View>
          </ComponentSection>

          {/* Skeleton Section */}
          <ComponentSection title="Skeleton">
            <View className="gap-6">
              {/* Avatar Skeletons */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Avatar Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-3">
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
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Avatar Shapes
                </Text>
                <View className="flex-row gap-3">
                  <Skeleton.Avatar size="4" shape="circle" />
                  <Skeleton.Avatar size="4" shape="square" />
                </View>
              </View>

              {/* Text Skeletons */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Text Sizes
                </Text>
                <View className="gap-2">
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
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Rectangles
                </Text>
                <View className="gap-3">
                  <Skeleton.Rect style={{ width: 200, height: 120, borderRadius: 8 }} />
                  <Skeleton.Rect style={{ width: '100%', height: 16, borderRadius: 4 }} />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-2">
                <Text size="2" weight="medium">
                  Colors
                </Text>
                <View className="flex-row flex-wrap gap-3">
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
            <Accordion type="multiple" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Text>Is it accessible?</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <Text>Is it styled?</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text>
                    Yes. It comes with default styles that match the other components' aesthetic.
                  </Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <Text>Is it animated?</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text>Yes. It's animated by default with smooth transitions.</Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Text>Open Dialog</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="surface">
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                  <Button>
                    <Text>Continue</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentSection>

          {/* Alert Dialog Section */}
          <ComponentSection title="Alert Dialog">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="solid" color="red">
                  <Text>Delete Account</Text>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    <Text>Cancel</Text>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Text>Delete</Text>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </ComponentSection>

          {/* Popover Section */}
          <ComponentSection title="Popover">
            <View className="gap-6">
              {/* Default (translucent, size 2) */}
              <View className="gap-2">
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
                        <Input placeholder="100%" aria-labelledby="width" />
                      </View>
                      <View style={{ gap: 8 }}>
                        <Label nativeID="height">Height</Label>
                        <Input placeholder="25px" aria-labelledby="height" />
                      </View>
                    </View>
                  </Popover.Content>
                </Popover.Root>
              </View>

              {/* Solid variant */}
              <View className="gap-2">
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
              <View className="gap-2">
                <Text size="2" weight="medium" color="gray">
                  Sizes
                </Text>
                <View className="flex-row flex-wrap gap-4">
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
            <View className="gap-6">
              {/* Default Demo */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Default
                </Text>
                <DropdownMenuDefaultDemo />
              </View>

              {/* Sizes */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-3">
                  <DropdownMenuSizeDemo size="1" label="Small" />
                  <DropdownMenuSizeDemo size="2" label="Default" />
                  <DropdownMenuSizeDemo size="3" label="Large" />
                </View>
              </View>

              {/* Colors */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Item Colors
                </Text>
                <DropdownMenuColorDemo />
              </View>

              {/* With Submenu */}
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  With Submenu
                </Text>
                <DropdownMenuWithSubmenuDemo />
              </View>
            </View>
          </ComponentSection>

          {/* Select Section */}
          <ComponentSection title="Select">
            <View className="gap-6">
              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Blue
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectDemo variant="surface" color="blue" />
                  <SelectDemo variant="soft" color="blue" />
                  <SelectDemo variant="ghost" color="blue" />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Green
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectDemo variant="surface" color="green" />
                  <SelectDemo variant="soft" color="green" />
                  <SelectDemo variant="ghost" color="green" />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Red
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectDemo variant="surface" color="red" />
                  <SelectDemo variant="soft" color="red" />
                  <SelectDemo variant="ghost" color="red" />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Variants - Purple
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectDemo variant="surface" color="purple" />
                  <SelectDemo variant="soft" color="purple" />
                  <SelectDemo variant="ghost" color="purple" />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Select Sizes
                </Text>
                <View className="flex-row flex-wrap items-center gap-2">
                  <SelectDemo size="1" />
                  <SelectDemo size="2" />
                  <SelectDemo size="3" />
                  <SelectDemo size="4" />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Disabled State
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectDemo variant="surface" color="blue" disabled />
                  <SelectDemo variant="soft" color="blue" disabled />
                  <SelectDemo variant="ghost" color="blue" disabled />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  Many Options (Scrollable)
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectManyOptionsDemo />
                </View>
              </View>

              <View className="gap-3">
                <Text weight="semi-bold" className="text-gray-a10">
                  With Groups, Labels & Separators
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  <SelectGroupedDemo />
                </View>
              </View>
            </View>
          </ComponentSection>

          {/* Context Menu Section */}
          <ComponentSection title="Context Menu">
            <ContextMenuDemo />
          </ComponentSection>

          {/* Menubar Section */}
          <ComponentSection title="Menubar">
            <MenubarDemo />
          </ComponentSection>

          {/* Hover Card Section */}
          <ComponentSection title="Hover Card">
            <HoverCardDemo />
          </ComponentSection>

          {/* Tooltip Section */}
          <ComponentSection title="Tooltip">
            <View className="flex-row gap-4">
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

          {/* Collapsible Section */}
          <ComponentSection title="Collapsible">
            <CollapsibleDemo />
          </ComponentSection>

          {/* Bottom padding for scroll */}
          <View className="h-8" />
        </View>
      </ScrollView>
    </>
  );
}

// Helper Components
function ComponentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-4">
      <View className="flex-row items-center gap-2">
        <Icon as={ChevronRightIcon} className="text-gray-12" />
        <Heading size="3">{title}</Heading>
      </View>
      <Card>{children}</Card>
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
    <View className="flex-row items-center gap-2">
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
      <View className="gap-2">
        <View className="flex-row items-center gap-2">
          <RadioGroup.Item aria-labelledby={`${id}-1`} value="option1" />
          <Label nativeID={`${id}-1`}>Option 1</Label>
        </View>
        <View className="flex-row items-center gap-2">
          <RadioGroup.Item aria-labelledby={`${id}-2`} value="option2" />
          <Label nativeID={`${id}-2`}>Option 2</Label>
        </View>
      </View>
    </RadioGroup.Root>
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
    <View className="flex-row items-center gap-3">
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

function ToggleGroupDemo() {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <ToggleGroup type="multiple" value={value} onValueChange={setValue} className="flex-row">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Icon as={BoldIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Icon as={ItalicIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Icon as={UnderlineIcon} />
      </ToggleGroupItem>
    </ToggleGroup>
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

function ToggleSingleDemo() {
  const [bold, setBold] = React.useState(false);
  const [italic, setItalic] = React.useState(false);
  const [underline, setUnderline] = React.useState(false);

  return (
    <>
      <Toggle pressed={bold} onPressedChange={setBold}>
        <Icon as={BoldIcon} />
      </Toggle>
      <Toggle pressed={italic} onPressedChange={setItalic}>
        <Icon as={ItalicIcon} />
      </Toggle>
      <Toggle pressed={underline} onPressedChange={setUnderline}>
        <Icon as={UnderlineIcon} />
      </Toggle>
    </>
  );
}

function TabsDemo() {
  const [value1, setValue1] = React.useState('account');
  const [value2, setValue2] = React.useState('tab1');

  return (
    <View className="gap-6">
      {/* Sizes */}
      <View className="gap-2">
        <Text size="2" weight="medium">
          Sizes
        </Text>
        <View className="gap-4">
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

      {/* Full Example */}
      <View className="gap-2">
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
          <Tabs.Content value="account" className="p-4">
            <View className="gap-6">
              <View className="gap-1.5">
                <Heading size="3">Account</Heading>
                <Text color="gray">
                  Make changes to your account here. Click save when you're done.
                </Text>
              </View>
              <View className="gap-4">
                <View className="gap-2">
                  <Label nativeID="name">Name</Label>
                  <Input placeholder="Enter your name" aria-labelledby="name" />
                </View>
                <View className="gap-2">
                  <Label nativeID="username">Username</Label>
                  <Input placeholder="Enter your username" aria-labelledby="username" />
                </View>
              </View>
              <View className="flex-row items-center">
                <Button>
                  <Text>Save changes</Text>
                </Button>
              </View>
            </View>
          </Tabs.Content>
          <Tabs.Content value="password" className="p-4">
            <View className="gap-6">
              <View className="gap-1.5">
                <Heading size="3">Password</Heading>
                <Text color="gray">
                  Change your password here. After saving, you'll be logged out.
                </Text>
              </View>
              <View className="gap-4">
                <View className="gap-2">
                  <Label nativeID="current">Current password</Label>
                  <Input
                    placeholder="Enter current password"
                    secureTextEntry
                    aria-labelledby="current"
                  />
                </View>
                <View className="gap-2">
                  <Label nativeID="new">New password</Label>
                  <Input placeholder="Enter new password" secureTextEntry aria-labelledby="new" />
                </View>
              </View>
              <View className="flex-row items-center">
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

function ContextMenuDemo() {
  const [checked, setChecked] = React.useState(true);
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <View className="flex h-32 items-center justify-center rounded-md border border-dashed border-stroke">
          <Text className="text-sm text-gray-a10">Right click / Long press here</Text>
        </View>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Icon as={UserIcon} />
          <Text>Profile</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Icon as={CreditCardIcon} />
          <Text>Billing</Text>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
          <Text>Show Toolbar</Text>
        </ContextMenuCheckboxItem>
        <ContextMenuLabel>More</ContextMenuLabel>
        <ContextMenuItem>
          <Icon as={SettingsIcon} />
          <Text>Settings</Text>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
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
    <View className="gap-6">
      {/* Default (translucent, size 2) */}
      <View className="gap-2">
        <Text size="2" weight="medium" color="gray">
          Default (translucent)
        </Text>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Button variant="ghost" color="blue">
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
                  <Icon as={CalendarIcon} className="size-3" />
                  <Text size="2">Joined December 2021</Text>
                </View>
              </View>
            </View>
          </HoverCard.Content>
        </HoverCard.Root>
      </View>

      {/* Solid variant */}
      <View className="gap-2">
        <Text size="2" weight="medium" color="gray">
          Solid variant
        </Text>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Button variant="ghost" color="violet">
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
      <View className="gap-2">
        <Text size="2" weight="medium" color="gray">
          Sizes
        </Text>
        <View className="flex-row gap-4">
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

function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <Text size="1" weight="semi-bold" className="text-gray-a10">
            @peduarte starred 3 repositories
          </Text>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="2">
              <Icon as={ChevronDownIcon} className={isOpen ? 'rotate-180' : ''} />
            </Button>
          </CollapsibleTrigger>
        </View>
        <View className="rounded-md border border-stroke px-4 py-3">
          <Text className="font-mono">@radix-ui/primitives</Text>
        </View>
        <CollapsibleContent>
          <View className="gap-2">
            <View className="rounded-md border border-stroke px-4 py-3">
              <Text className="font-mono">@radix-ui/colors</Text>
            </View>
            <View className="rounded-md border border-stroke px-4 py-3">
              <Text className="font-mono">@stitches/react</Text>
            </View>
          </View>
        </CollapsibleContent>
      </View>
    </Collapsible>
  );
}

function MenubarDemo() {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <Menubar value={value} onValueChange={setValue}>
      <MenubarMenu value="file">
        <MenubarTrigger>
          <Text>File</Text>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Text>New Tab</Text>
          </MenubarItem>
          <MenubarItem>
            <Text>New Window</Text>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Text>Share</Text>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Text>Print</Text>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>
          <Text>Edit</Text>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Text>Undo</Text>
          </MenubarItem>
          <MenubarItem>
            <Text>Redo</Text>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Text>Cut</Text>
          </MenubarItem>
          <MenubarItem>
            <Text>Copy</Text>
          </MenubarItem>
          <MenubarItem>
            <Text>Paste</Text>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const THEME_ICONS = {
    light: SunIcon,
    dark: MoonStarIcon,
  };

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="4"
      variant="surface"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
