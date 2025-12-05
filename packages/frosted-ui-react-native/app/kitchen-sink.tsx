import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  ItalicIcon,
  LogOutIcon,
  MailIcon,
  MoonStarIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
  UnderlineIcon,
  UserIcon,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, ScrollView, View } from 'react-native';

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
              <Text variant="h1">Heading 1</Text>
              <Text variant="h2">Heading 2</Text>
              <Text variant="h3">Heading 3</Text>
              <Text variant="h4">Heading 4</Text>
              <Text variant="lead">Lead text for introducing content</Text>
              <Text variant="p">
                This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text variant="large">Large text</Text>
              <Text variant="small">Small text</Text>
              <Text variant="muted">Muted text</Text>
              <Text variant="code">inline code</Text>
              <Text variant="blockquote">
                "This is a blockquote. It can contain longer passages of text."
              </Text>
            </View>
          </ComponentSection>

          {/* Buttons Section */}
          <ComponentSection title="Buttons">
            <View className="gap-4">
              <Text variant="small" className="text-muted-foreground">
                Button Variants
              </Text>
              <View className="flex-row flex-wrap gap-2">
                <Button>
                  <Text>Default</Text>
                </Button>
                <Button variant="secondary">
                  <Text>Secondary</Text>
                </Button>
                <Button variant="destructive">
                  <Text>Destructive</Text>
                </Button>
                <Button variant="outline">
                  <Text>Outline</Text>
                </Button>
                <Button variant="ghost">
                  <Text>Ghost</Text>
                </Button>
                <Button variant="link">
                  <Text>Link</Text>
                </Button>
              </View>

              <Text variant="small" className="text-muted-foreground">
                Button Sizes
              </Text>
              <View className="flex-row flex-wrap items-center gap-2">
                <Button size="sm">
                  <Text>Small</Text>
                </Button>
                <Button size="default">
                  <Text>Default</Text>
                </Button>
                <Button size="lg">
                  <Text>Large</Text>
                </Button>
                <Button size="icon">
                  <Icon as={StarIcon} />
                </Button>
              </View>

              <Text variant="small" className="text-muted-foreground">
                With Icons
              </Text>
              <View className="flex-row flex-wrap gap-2">
                <Button>
                  <Icon as={MailIcon} />
                  <Text>Email</Text>
                </Button>
                <Button variant="outline">
                  <Text>Notifications</Text>
                  <Icon as={BellIcon} />
                </Button>
              </View>

              <Text variant="small" className="text-muted-foreground">
                Disabled State
              </Text>
              <Button disabled>
                <Text>Disabled Button</Text>
              </Button>
            </View>
          </ComponentSection>

          {/* Badges Section */}
          <ComponentSection title="Badges">
            <View className="flex-row flex-wrap gap-2">
              <Badge>
                <Text>Default</Text>
              </Badge>
              <Badge variant="secondary">
                <Text>Secondary</Text>
              </Badge>
              <Badge variant="destructive">
                <Text>Destructive</Text>
              </Badge>
              <Badge variant="outline">
                <Text>Outline</Text>
              </Badge>
            </View>
          </ComponentSection>

          {/* Cards Section */}
          <ComponentSection title="Cards">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <Text>This is the card content area. You can put any content here.</Text>
              </CardContent>
              <CardFooter>
                <Button>
                  <Text>Action</Text>
                </Button>
              </CardFooter>
            </Card>
          </ComponentSection>

          {/* Alerts Section */}
          <ComponentSection title="Alerts">
            <View className="gap-4">
              <Alert icon={AlertCircleIcon}>
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                  This is a default alert with some descriptive text.
                </AlertDescription>
              </Alert>
              <Alert icon={AlertCircleIcon} variant="destructive">
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>This alert indicates an error or warning.</AlertDescription>
              </Alert>
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
            <View className="gap-4">
              <CheckboxItem label="Accept terms and conditions" />
              <CheckboxItem label="Subscribe to newsletter" />
              <CheckboxItem label="Enable notifications" defaultChecked />
            </View>
          </ComponentSection>

          {/* Radio Group Section */}
          <ComponentSection title="Radio Group">
            <RadioGroupDemo />
          </ComponentSection>

          {/* Switch Section */}
          <ComponentSection title="Switch">
            <View className="gap-4">
              <SwitchItem label="Enable notifications" />
              <SwitchItem label="Dark mode" defaultChecked />
              <SwitchItem label="Disabled switch" disabled />
            </View>
          </ComponentSection>

          {/* Toggle Section */}
          <ComponentSection title="Toggle">
            <View className="gap-4">
              <View className="flex-row flex-wrap gap-2">
                <ToggleSingleDemo />
              </View>

              <Text variant="small" className="text-muted-foreground">
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
            <View className="gap-4">
              <Progress value={0} />
              <Progress value={25} />
              <Progress value={50} />
              <Progress value={75} />
              <Progress value={100} />
            </View>
          </ComponentSection>

          {/* Avatar Section */}
          <ComponentSection title="Avatar">
            <View className="flex-row flex-wrap gap-4">
              <Avatar alt="User avatar">
                <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
                <AvatarFallback>
                  <Text>CN</Text>
                </AvatarFallback>
              </Avatar>
              <Avatar alt="User with fallback">
                <AvatarFallback>
                  <Text>AB</Text>
                </AvatarFallback>
              </Avatar>
              <Avatar alt="User icon">
                <AvatarFallback>
                  <Icon as={UserIcon} />
                </AvatarFallback>
              </Avatar>
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
                    <Button variant="outline">
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
                <Button variant="destructive">
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
                <Button variant="outline">
                  <Text>Open Popover</Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <View className="gap-4">
                  <View className="gap-2">
                    <Text variant="small" className="font-semibold">
                      Dimensions
                    </Text>
                    <Text variant="muted">Set the dimensions for the layer.</Text>
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
                  <Button variant="outline">
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

              <Text variant="small" className="text-muted-foreground">
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
                <Button variant="link">
                  <Text>@nextjs</Text>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <View className="flex-row gap-4">
                  <Avatar alt="Next.js">
                    <AvatarFallback>
                      <Text>NX</Text>
                    </AvatarFallback>
                  </Avatar>
                  <View className="flex-1 gap-1">
                    <Text variant="small" className="font-semibold">
                      @nextjs
                    </Text>
                    <Text variant="muted">
                      The React Framework – created and maintained by @vercel.
                    </Text>
                    <View className="flex-row items-center gap-2 pt-2">
                      <Icon as={CalendarIcon} className="size-3" />
                      <Text variant="muted">Joined December 2021</Text>
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
                <Button variant="outline">
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
        <Text variant="h3" className="text-2xl">
          {title}
        </Text>
      </View>
      <Card>
        <CardContent className="pt-6">{children}</CardContent>
      </Card>
    </View>
  );
}

function CheckboxItem({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return (
    <View className="flex-row items-center gap-2">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Label
        onPress={() => setChecked((prev) => !prev)}
        nativeID={label.replace(/\s+/g, '-').toLowerCase()}>
        {label}
      </Label>
    </View>
  );
}

function RadioGroupDemo() {
  const [value, setValue] = React.useState('comfortable');
  return (
    <RadioGroup value={value} onValueChange={setValue} className="gap-3">
      <View className="flex-row items-center gap-2">
        <RadioGroupItem aria-labelledby="default-radio" value="default" />
        <Label nativeID="default-radio">Default</Label>
      </View>
      <View className="flex-row items-center gap-2">
        <RadioGroupItem aria-labelledby="comfortable-radio" value="comfortable" />
        <Label nativeID="comfortable-radio">Comfortable</Label>
      </View>
      <View className="flex-row items-center gap-2">
        <RadioGroupItem aria-labelledby="compact-radio" value="compact" />
        <Label nativeID="compact-radio">Compact</Label>
      </View>
    </RadioGroup>
  );
}

function SwitchItem({
  label,
  defaultChecked = false,
  disabled = false,
}: {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return (
    <View className="flex-row items-center justify-between">
      <Label nativeID={label.replace(/\s+/g, '-').toLowerCase()}>{label}</Label>
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        disabled={disabled}
        aria-labelledby={label.replace(/\s+/g, '-').toLowerCase()}
      />
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
  const [value, setValue] = React.useState('account');
  return (
    <Tabs value={value} onValueChange={setValue} className="w-full">
      <TabsList className="w-full flex-row">
        <TabsTrigger value="account" className="flex-1">
          <Text>Account</Text>
        </TabsTrigger>
        <TabsTrigger value="password" className="flex-1">
          <Text>Password</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <Label nativeID="name">Name</Label>
              <Input placeholder="Enter your name" aria-labelledby="name" />
            </View>
            <View className="gap-2">
              <Label nativeID="username">Username</Label>
              <Input placeholder="Enter your username" aria-labelledby="username" />
            </View>
          </CardContent>
          <CardFooter>
            <Button>
              <Text>Save changes</Text>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
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
          </CardContent>
          <CardFooter>
            <Button>
              <Text>Save password</Text>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function ContextMenuDemo() {
  const [checked, setChecked] = React.useState(true);
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <View className="border-stroke flex h-32 items-center justify-center rounded-md border border-dashed">
          <Text className="text-sm text-muted-foreground">Right click / Long press here</Text>
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
        <Button variant="outline">
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
        <Button variant="link">
          <Text>@nextjs</Text>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <View className="flex-row gap-4">
          <Avatar alt="Next.js">
            <AvatarFallback>
              <Text>NX</Text>
            </AvatarFallback>
          </Avatar>
          <View className="flex-1 gap-1">
            <Text variant="small" className="font-semibold">
              @nextjs
            </Text>
            <Text variant="muted">The React Framework – created and maintained by @vercel.</Text>
            <View className="flex-row items-center gap-2 pt-2">
              <Icon as={CalendarIcon} className="size-3" />
              <Text variant="muted">Joined December 2021</Text>
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
          <Text variant="small" className="font-semibold">
            @peduarte starred 3 repositories
          </Text>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <Icon as={ChevronDownIcon} className={isOpen ? 'rotate-180' : ''} />
            </Button>
          </CollapsibleTrigger>
        </View>
        <View className="border-stroke rounded-md border px-4 py-3">
          <Text variant="code">@radix-ui/primitives</Text>
        </View>
        <CollapsibleContent>
          <View className="gap-2">
            <View className="border-stroke rounded-md border px-4 py-3">
              <Text variant="code">@radix-ui/colors</Text>
            </View>
            <View className="border-stroke rounded-md border px-4 py-3">
              <Text variant="code">@stitches/react</Text>
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
      size="icon"
      variant="ghost"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
