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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Heading } from '@/components/ui/heading';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Icon } from '@/components/ui/icon';
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadioGroup } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { Tabs } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
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
  LogOutIcon,
  MailIcon,
  MoonStarIcon,
  RocketIcon,
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

          {/* Form Inputs Section */}
          <ComponentSection title="Form Inputs">
            <View className="gap-4">
              <View className="gap-2">
                <Label nativeID="email">Email</Label>
                <Input placeholder="Enter your email" aria-labelledby="email" />
              </View>

              <View className="gap-2">
                <Label nativeID="message">Message</Label>
                <Textarea
                  placeholder="Type your message here"
                  aria-labelledby="message"
                  className="min-h-[100px]"
                />
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
            <View className="gap-4">
              <Text>Content above separator</Text>
              <Separator />
              <Text>Content below separator</Text>
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
            <View className="gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="surface">
                  <Text>Open Popover</Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <View className="gap-4">
                  <View className="gap-2">
                    <Text size="1" weight="semi-bold" className="text-gray-a10">
                      Dimensions
                    </Text>
                    <Text>Set the dimensions for the layer.</Text>
                  </View>
                  <View className="gap-2">
                    <Label nativeID="width">Width</Label>
                    <Input placeholder="100%" aria-labelledby="width" />
                  </View>
                  <View className="gap-2">
                    <Label nativeID="height">Height</Label>
                    <Input placeholder="25px" aria-labelledby="height" />
                  </View>
                </View>
              </PopoverContent>
            </Popover>
          </ComponentSection>

          {/* Dropdown Menu Section */}
          <ComponentSection title="Dropdown Menu">
            <View className="gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="surface">
                    <Text>Open Menu</Text>
                    <Icon as={ChevronDownIcon} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Icon as={UserIcon} />
                    <Text>Profile</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon as={CreditCardIcon} />
                    <Text>Billing</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon as={SettingsIcon} />
                    <Text>Settings</Text>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <Icon as={LogOutIcon} />
                    <Text>Log out</Text>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Text size="1" className="text-gray-a10">
                With Checkbox and Radio Items
              </Text>
              <DropdownMenuDemo />
            </View>
          </ComponentSection>

          {/* Select Section */}
          <ComponentSection title="Select">
            <View className="gap-4">
              <View className="gap-2">
                <Label nativeID="framework">Select a framework</Label>
                <SelectDemo />
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
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" color="blue">
                  <Text>@nextjs</Text>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <View className="flex-row gap-4">
                  <Avatar size="3" fallback="Next.js" />
                  <View className="flex-1 gap-1">
                    <Text size="1" weight="semi-bold" className="text-gray-a10">
                      @nextjs
                    </Text>
                    <Text>The React Framework – created and maintained by @vercel.</Text>
                    <View className="flex-row items-center gap-2 pt-2">
                      <Icon as={CalendarIcon} className="size-3" />
                      <Text>Joined December 2021</Text>
                    </View>
                  </View>
                </View>
              </HoverCardContent>
            </HoverCard>
          </ComponentSection>

          {/* Tooltip Section */}
          <ComponentSection title="Tooltip">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="surface">
                  <Text>Hover me</Text>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Add to library</Text>
              </TooltipContent>
            </Tooltip>
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

function SelectDemo() {
  const [value, setValue] = React.useState<{ value: string; label: string } | undefined>();
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem label="Next.js" value="next">
          Next.js
        </SelectItem>
        <SelectItem label="React" value="react">
          React
        </SelectItem>
        <SelectItem label="Vue" value="vue">
          Vue
        </SelectItem>
        <SelectItem label="Svelte" value="svelte">
          Svelte
        </SelectItem>
        <SelectItem label="Angular" value="angular">
          Angular
        </SelectItem>
      </SelectContent>
    </Select>
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

function ContextMenuDemo() {
  const [checked, setChecked] = React.useState(true);
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <View className="border-stroke flex h-32 items-center justify-center rounded-md border border-dashed">
          <Text className="text-gray-a10 text-sm">Right click / Long press here</Text>
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

function DropdownMenuDemo() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [position, setPosition] = React.useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="surface">
          <Text>Preferences</Text>
          <Icon as={ChevronDownIcon} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          <Text>Status Bar</Text>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">
            <Text>Top</Text>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            <Text>Bottom</Text>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            <Text>Right</Text>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" color="blue">
          <Text>@nextjs</Text>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <View className="flex-row gap-4">
          <Avatar size="3" fallback="Next.js" />
          <View className="flex-1 gap-1">
            <Text size="1" weight="semi-bold" className="text-gray-a10">
              @nextjs
            </Text>
            <Text>The React Framework – created and maintained by @vercel.</Text>
            <View className="flex-row items-center gap-2 pt-2">
              <Icon as={CalendarIcon} className="size-3" />
              <Text>Joined December 2021</Text>
            </View>
          </View>
        </View>
      </HoverCardContent>
    </HoverCard>
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
        <View className="border-stroke rounded-md border px-4 py-3">
          <Text className="font-mono">@radix-ui/primitives</Text>
        </View>
        <CollapsibleContent>
          <View className="gap-2">
            <View className="border-stroke rounded-md border px-4 py-3">
              <Text className="font-mono">@radix-ui/colors</Text>
            </View>
            <View className="border-stroke rounded-md border px-4 py-3">
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
