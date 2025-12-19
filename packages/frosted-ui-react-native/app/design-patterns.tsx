import {
  AlertDialog,
  Avatar,
  Badge,
  Button,
  Callout,
  Card,
  Checkbox,
  Dialog,
  Heading,
  Icon,
  IconButton,
  Label,
  List,
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
  useThemeTokens,
} from '@frosted-ui/react-native';
import { Stack } from 'expo-router';
import {
  AlertCircle,
  ArrowLeft,
  Bell,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  Flame,
  Gift,
  Heart,
  Inbox,
  Info,
  Linkedin,
  MapPin,
  MessageCircle,
  Minus,
  MoreHorizontal,
  Music,
  Pause,
  Play,
  Plus,
  Quote,
  Search,
  Send,
  Settings,
  Share,
  ShoppingBag,
  ShoppingCart,
  SkipBack,
  SkipForward,
  Sparkles,
  Star,
  ThumbsUp,
  Timer,
  Trash2,
  Trophy,
  Truck,
  Twitter,
  Users,
  X,
  Zap,
} from 'lucide-react-native';
import * as React from 'react';
import { Platform, Pressable, ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderOptions } from './_header';

// ============================================================================
// Responsive Layout
// ============================================================================

const MAX_CONTENT_WIDTH = 600;
const BREAKPOINT = 768;
const TABLET = 768;
const DESKTOP = 1024;

function useResponsiveLayout() {
  const { width } = useWindowDimensions();
  const isWide = width >= BREAKPOINT;
  const contentWidth = isWide ? MAX_CONTENT_WIDTH : width;
  const horizontalPadding = isWide ? Math.max(24, (width - MAX_CONTENT_WIDTH) / 2) : 16;

  return { isWide, contentWidth, horizontalPadding, screenWidth: width };
}

function useAdaptiveLayout() {
  const { width } = useWindowDimensions();

  const getColumns = (minItemWidth: number, maxColumns = 4) => {
    const availableWidth = width - 32;
    const columns = Math.floor(availableWidth / minItemWidth);
    return Math.max(1, Math.min(columns, maxColumns));
  };

  return {
    screenWidth: width,
    isTablet: width >= TABLET,
    isDesktop: width >= DESKTOP,
    getColumns,
  };
}

// ============================================================================
// Section Component
// ============================================================================

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: 12 }}>
      <Heading size="4">{title}</Heading>
      {children}
    </View>
  );
}

// ============================================================================
// Pattern Components
// ============================================================================

function TitleDescriptionPattern() {
  return (
    <Card>
      <View style={{ gap: 4 }}>
        <Heading size="5">Welcome back</Heading>
        <Text size="3" color="gray">
          Here's what's happening today
        </Text>
      </View>
    </Card>
  );
}

function FormFieldPattern() {
  return (
    <Card>
      <View style={{ gap: 16 }}>
        <Heading size="3">Personal Information</Heading>

        <View style={{ gap: 12 }}>
          <View style={{ gap: 6 }}>
            <Label nativeID="first-name">First Name</Label>
            <TextField.Input placeholder="John" aria-labelledby="first-name" />
          </View>

          <View style={{ gap: 6 }}>
            <Label nativeID="last-name">Last Name</Label>
            <TextField.Input placeholder="Doe" aria-labelledby="last-name" />
          </View>

          <View style={{ gap: 6 }}>
            <Label nativeID="email">Email</Label>
            <TextField.Input
              placeholder="john@example.com"
              aria-labelledby="email"
              keyboardType="email-address"
            />
            <Text size="1" color="gray">
              We'll never share your email
            </Text>
          </View>

          <View style={{ gap: 6 }}>
            <Label nativeID="bio">Bio</Label>
            <TextArea placeholder="Tell us about yourself..." aria-labelledby="bio" />
          </View>
        </View>
      </View>
    </Card>
  );
}

function ListItemPattern() {
  const { colors } = useThemeTokens();
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Away' },
    { id: '3', name: 'Bob Wilson', email: 'bob@example.com', status: 'Active' },
  ];

  return (
    <List.Root>
      {users.map((user, index) => (
        <React.Fragment key={user.id}>
          {index > 0 && <List.Separator />}
          <List.Item onPress={() => {}}>
            <List.ItemSlot>
              <Avatar fallback={user.name} size="3" />
            </List.ItemSlot>
            <List.ItemContent>
              <List.ItemTitle>{user.name}</List.ItemTitle>
              <List.ItemDescription>{user.email}</List.ItemDescription>
            </List.ItemContent>
            <List.ItemSlot>
              <Badge color={user.status === 'Active' ? 'success' : 'warning'} size="1">
                <Text>{user.status}</Text>
              </Badge>
            </List.ItemSlot>
            <List.ItemSlot>
              <Icon as={ChevronRight} size={16} color={colors.palettes.gray.a8} />
            </List.ItemSlot>
          </List.Item>
        </React.Fragment>
      ))}
    </List.Root>
  );
}

function SettingsListPattern() {
  const { colors } = useThemeTokens();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [sound, setSound] = React.useState('on');

  return (
    <List.Root>
      {/* Switch setting */}
      <List.Item>
        <List.ItemSlot>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: colors.palettes.blue.a3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon as={Bell} size={20} color={colors.palettes.blue.a11} />
          </View>
        </List.ItemSlot>
        <List.ItemContent>
          <List.ItemTitle>Notifications</List.ItemTitle>
        </List.ItemContent>
        <List.ItemSlot>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </List.ItemSlot>
      </List.Item>

      <List.Separator />

      {/* Checkbox setting */}
      <List.Item onPress={() => setDarkMode(!darkMode)}>
        <List.ItemSlot>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: colors.palettes.purple.a3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon as={Settings} size={20} color={colors.palettes.purple.a11} />
          </View>
        </List.ItemSlot>
        <List.ItemContent>
          <List.ItemTitle>Dark Mode</List.ItemTitle>
        </List.ItemContent>
        <List.ItemSlot>
          <Checkbox checked={darkMode} onCheckedChange={setDarkMode} />
        </List.ItemSlot>
      </List.Item>

      <List.Separator />

      {/* Select setting */}
      <List.Item>
        <List.ItemSlot>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: colors.palettes.green.a3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon as={MessageCircle} size={20} color={colors.palettes.green.a11} />
          </View>
        </List.ItemSlot>
        <List.ItemContent>
          <List.ItemTitle>Sound</List.ItemTitle>
        </List.ItemContent>
        <List.ItemSlot>
          <Select.Root
            size="2"
            value={sound ? { value: sound, label: sound === 'on' ? 'On' : 'Off' } : undefined}
            onValueChange={(v) => setSound(v?.value ?? 'on')}>
            <Select.Trigger variant="ghost">
              <Select.Value placeholder="Select..." />
            </Select.Trigger>
            <Select.Content align="end">
              <Select.Item value="on" label="On">
                On
              </Select.Item>
              <Select.Item value="off" label="Off">
                Off
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </List.ItemSlot>
      </List.Item>
    </List.Root>
  );
}

function StatCardsPattern() {
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Card style={{ flex: 1 }}>
        <View style={{ gap: 4 }}>
          <Text size="1" color="gray">
            Revenue
          </Text>
          <Heading size="5">$12,345</Heading>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Badge color="success" size="1">
              <Text>+12%</Text>
            </Badge>
          </View>
        </View>
      </Card>
      <Card style={{ flex: 1 }}>
        <View style={{ gap: 4 }}>
          <Text size="1" color="gray">
            Users
          </Text>
          <Heading size="5">1,234</Heading>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Badge color="info" size="1">
              <Text>+5%</Text>
            </Badge>
          </View>
        </View>
      </Card>
    </View>
  );
}

function CardVariantsPattern() {
  const { colors } = useThemeTokens();

  return (
    <View style={{ gap: 16 }}>
      {/* Surface variant - Elevated content card (default) */}
      <View style={{ gap: 8 }}>
        <Text size="1" weight="medium" color="gray">
          Surface (default) — Elevated content
        </Text>
        <Card variant="surface">
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Avatar fallback="SJ" color="blue" size="3" />
            <View style={{ flex: 1, gap: 4 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text weight="medium">Sarah Johnson</Text>
                <Text size="1" color="gray">
                  2m ago
                </Text>
              </View>
              <Text size="3" color="gray">
                Hey! Just finished the design review. The new dashboard looks amazing! 🎉
              </Text>
            </View>
          </View>
        </Card>
      </View>

      {/* Soft variant - Highlighted section */}
      <View style={{ gap: 8 }}>
        <Text size="1" weight="medium" color="gray">
          Soft — Highlighted sections & tips
        </Text>
        <Card variant="soft">
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                backgroundColor: colors.palettes.amber.a3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon as={Info} size={20} color={colors.palettes.amber.a11} />
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text weight="medium">Pro Tip</Text>
              <Text size="3" color="gray">
                Enable notifications to stay updated on new messages and activity from your team.
              </Text>
              <Button variant="ghost" size="2" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
                <Text>Enable Notifications</Text>
                <Icon as={ChevronRight} size={16} />
              </Button>
            </View>
          </View>
        </Card>
      </View>

      {/* Ghost variant - Grouped list section */}
      <View style={{ gap: 8 }}>
        <Text size="1" weight="medium" color="gray">
          Ghost — Section grouping
        </Text>
        <Card variant="ghost" style={{ padding: 0 }}>
          <View style={{ gap: 12 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Heading size="4">Recent Activity</Heading>
              <Button variant="ghost" size="2">
                <Text>See All</Text>
              </Button>
            </View>
            <List.Root>
              {[
                {
                  name: 'Alex Chen',
                  action: 'commented on your post',
                  detail: '"Great work on this project!"',
                  time: '5m',
                  color: 'blue' as const,
                },
                {
                  name: 'Maria Garcia',
                  action: 'liked your photo',
                  detail: 'Beach sunset.jpg',
                  time: '12m',
                  color: 'pink' as const,
                },
                {
                  name: 'Tom Wilson',
                  action: 'started following you',
                  detail: null,
                  time: '1h',
                  color: 'green' as const,
                },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <List.Separator />}
                  <List.Item onPress={() => {}}>
                    <List.ItemSlot>
                      <Avatar
                        fallback={item.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                        size="3"
                        color={item.color}
                      />
                    </List.ItemSlot>
                    <List.ItemContent>
                      <List.ItemTitle>{item.name}</List.ItemTitle>
                      <List.ItemDescription>{item.action}</List.ItemDescription>
                      {item.detail && (
                        <Text
                          size="1"
                          color="gray"
                          numberOfLines={1}
                          style={{ fontStyle: 'italic' }}>
                          {item.detail}
                        </Text>
                      )}
                    </List.ItemContent>
                    <List.ItemSlot>
                      <Text size="1" color="gray">
                        {item.time}
                      </Text>
                    </List.ItemSlot>
                  </List.Item>
                </React.Fragment>
              ))}
            </List.Root>
          </View>
        </Card>
      </View>
    </View>
  );
}

function BuyBoxPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 16 }}>
        {/* Product Image Placeholder */}
        <View
          style={{
            height: 200,
            backgroundColor: colors.palettes.gray.a3,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color="gray">Product Image</Text>
        </View>

        {/* Product Info */}
        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Badge color="success" size="1">
              <Text>In Stock</Text>
            </Badge>
            <Badge variant="soft" color="gray" size="1">
              <Text>Free Shipping</Text>
            </Badge>
          </View>
          <Heading size="5">Premium Wireless Headphones</Heading>
          <Text size="3" color="gray">
            High-fidelity audio with active noise cancellation and 30-hour battery life.
          </Text>
        </View>

        {/* Price */}
        <View style={{ gap: 4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
            <Heading size="6">$299</Heading>
            <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
              $349
            </Text>
          </View>
          <Text size="1" color="success">
            Save $50 (14% off)
          </Text>
        </View>

        <Separator size="4" />

        {/* CTA Buttons */}
        <View style={{ gap: 12 }}>
          <Button variant="solid" size="4">
            <Text>Add to Cart</Text>
          </Button>
          <Button variant="soft" color="gray" size="4">
            <Icon as={Heart} size={18} />
            <Text>Add to Wishlist</Text>
          </Button>
        </View>
      </View>
    </Card>
  );
}

function ButtonPatternsSection() {
  return (
    <Card>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Text size="1" weight="medium" color="gray">
            Button Hierarchy
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            <Button variant="solid">
              <Text>Primary</Text>
            </Button>
            <Button variant="soft" color="gray">
              <Text>Secondary</Text>
            </Button>
            <Button variant="surface">
              <Text>Surface</Text>
            </Button>
            <Button variant="ghost">
              <Text>Ghost</Text>
            </Button>
          </View>
        </View>

        <Separator size="4" />

        <View style={{ gap: 8 }}>
          <Text size="1" weight="medium" color="gray">
            Action Pair
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button variant="soft" color="gray" style={{ flex: 1 }}>
              <Text>Cancel</Text>
            </Button>
            <Button variant="solid" style={{ flex: 1 }}>
              <Text>Confirm</Text>
            </Button>
          </View>
        </View>

        <Separator size="4" />

        <View style={{ gap: 8 }}>
          <Text size="1" weight="medium" color="gray">
            Inline Actions
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button variant="ghost" size="2">
              <Icon as={Heart} size={16} />
              <Text>Like</Text>
            </Button>
            <Button variant="ghost" size="2">
              <Icon as={MessageCircle} size={16} />
              <Text>Comment</Text>
            </Button>
            <Button variant="ghost" size="2">
              <Icon as={Share} size={16} />
              <Text>Share</Text>
            </Button>
          </View>
        </View>

        <Separator size="4" />

        <View style={{ gap: 8 }}>
          <Text size="1" weight="medium" color="gray">
            Button with Icon
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button variant="solid">
              <Icon as={Plus} size={16} />
              <Text>Add Item</Text>
            </Button>
            <Button variant="soft" color="gray">
              <Icon as={Search} size={16} />
              <Text>Search</Text>
            </Button>
          </View>
        </View>
      </View>
    </Card>
  );
}

function EmptyStatePattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ alignItems: 'center', padding: 24, gap: 16 }}>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.palettes.gray.a3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon as={Inbox} size={32} color={colors.palettes.gray.a11} />
        </View>
        <View style={{ gap: 4, alignItems: 'center' }}>
          <Heading size="4">No messages yet</Heading>
          <Text size="3" color="gray" style={{ textAlign: 'center' }}>
            When you receive messages, they'll appear here
          </Text>
        </View>
        <Button variant="solid">
          <Text>Start a conversation</Text>
        </Button>
      </View>
    </Card>
  );
}

function ButtonLoadingDemo() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Button variant="solid" disabled={isLoading} onPress={handlePress}>
        <Spinner loading={isLoading} size="1">
          <Text>Submit</Text>
        </Spinner>
      </Button>
      <Button variant="soft" color="gray" disabled={isLoading} onPress={handlePress}>
        <Spinner loading={isLoading} size="1">
          <Text>Save Draft</Text>
        </Spinner>
      </Button>
    </View>
  );
}

function LoadingStatesPattern() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Card>
      <View style={{ gap: 16 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text size="1" weight="medium" color="gray">
            Skeleton Loading
          </Text>
          <Button variant="ghost" size="1" onPress={() => setIsLoading(!isLoading)}>
            <Text>{isLoading ? 'Show Content' : 'Show Loading'}</Text>
          </Button>
        </View>

        {isLoading ? (
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Skeleton.Avatar size="3" />
              <View style={{ flex: 1, gap: 2 }}>
                <Skeleton.Text size="2" style={{ width: '60%' }} />
                <Skeleton.Text size="1" style={{ width: '40%' }} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Skeleton.Avatar size="3" />
              <View style={{ flex: 1, gap: 2 }}>
                <Skeleton.Text size="2" style={{ width: '70%' }} />
                <Skeleton.Text size="1" style={{ width: '50%' }} />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Avatar fallback="JD" size="3" />
              <View style={{ gap: 2 }}>
                <Text weight="medium" size="2">
                  John Doe
                </Text>
                <Text size="1" color="gray">
                  john@example.com
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Avatar fallback="JS" size="3" />
              <View style={{ gap: 2 }}>
                <Text weight="medium" size="2">
                  Jane Smith
                </Text>
                <Text size="1" color="gray">
                  jane@example.com
                </Text>
              </View>
            </View>
          </View>
        )}

        <Separator size="4" />

        <View style={{ gap: 8 }}>
          <Text size="1" weight="medium" color="gray">
            Button Loading (tap to toggle)
          </Text>
          <ButtonLoadingDemo />
        </View>

        <Separator size="4" />

        <View style={{ gap: 8 }}>
          <Text size="1" weight="medium" color="gray">
            Progress
          </Text>
          <Progress value={65} size="2" />
        </View>
      </View>
    </Card>
  );
}

function FeedbackPattern() {
  return (
    <View style={{ gap: 12 }}>
      <Callout.Root color="success">
        <Callout.Icon>
          <Icon as={CheckCircle} size={16} />
        </Callout.Icon>
        <Callout.Text>
          <Text>Your changes have been saved successfully.</Text>
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="danger">
        <Callout.Icon>
          <Icon as={AlertCircle} size={16} />
        </Callout.Icon>
        <Callout.Text>
          <Text>Something went wrong. Please try again.</Text>
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="warning">
        <Callout.Icon>
          <Icon as={AlertCircle} size={16} />
        </Callout.Icon>
        <Callout.Text>
          <Text>Your session will expire in 5 minutes.</Text>
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="info">
        <Callout.Icon>
          <Icon as={Info} size={16} />
        </Callout.Icon>
        <Callout.Text>
          <Text>A new version is available. Refresh to update.</Text>
        </Callout.Text>
      </Callout.Root>
    </View>
  );
}

function ValidationErrorPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Validation Example</Heading>
        <View style={{ gap: 6 }}>
          <Label nativeID="error-email">Email</Label>
          <TextField.Input
            placeholder="you@example.com"
            aria-labelledby="error-email"
            defaultValue="invalid-email"
            style={{ borderColor: colors.palettes.danger['7'] }}
          />
          <Text size="1" color="danger">
            Please enter a valid email address
          </Text>
        </View>
      </View>
    </Card>
  );
}

function DialogPattern() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Dialogs</Heading>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
            <Dialog.Trigger>
              <Button variant="surface">
                <Text>Open Dialog</Text>
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Edit Profile</Dialog.Title>
              <Dialog.Description>Make changes to your profile here.</Dialog.Description>

              <View style={{ gap: 12, marginVertical: 16 }}>
                <View style={{ gap: 6 }}>
                  <Label nativeID="dialog-name">Name</Label>
                  <TextField.Input placeholder="Your name" aria-labelledby="dialog-name" />
                </View>
              </View>

              <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    <Text>Cancel</Text>
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button variant="solid">
                    <Text>Save</Text>
                  </Button>
                </Dialog.Close>
              </View>
            </Dialog.Content>
          </Dialog.Root>

          <AlertDialog.Root open={alertOpen} onOpenChange={setAlertOpen}>
            <AlertDialog.Trigger>
              <Button variant="soft" color="danger">
                <Text>Delete Item</Text>
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Delete Item</AlertDialog.Title>
                <AlertDialog.Description>
                  This action cannot be undone. Are you sure?
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    <Text>Cancel</Text>
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button variant="solid" color="danger">
                    <Text>Delete</Text>
                  </Button>
                </AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </View>
      </View>
    </Card>
  );
}

function NavigationPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Header with Back</Heading>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.panelSolid,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: colors.stroke,
            paddingHorizontal: 8,
            paddingVertical: 8,
            gap: 8,
          }}>
          <IconButton variant="ghost" size="2">
            <Icon as={ArrowLeft} size={18} />
          </IconButton>
          <Heading size="4" style={{ flex: 1 }}>
            Page Title
          </Heading>
          <IconButton variant="ghost" size="2">
            <Icon as={MoreHorizontal} size={18} />
          </IconButton>
        </View>
      </View>
    </Card>
  );
}

function TabsPattern() {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Tabs</Heading>
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="overview">
            <View style={{ paddingVertical: 16 }}>
              <Text color="gray">Overview content goes here</Text>
            </View>
          </Tabs.Content>
          <Tabs.Content value="activity">
            <View style={{ paddingVertical: 16 }}>
              <Text color="gray">Activity content goes here</Text>
            </View>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <View style={{ paddingVertical: 16 }}>
              <Text color="gray">Settings content goes here</Text>
            </View>
          </Tabs.Content>
        </Tabs.Root>
      </View>
    </Card>
  );
}

function SegmentedControlPattern() {
  const [view, setView] = React.useState('list');

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Segmented Control</Heading>
        <SegmentedControl.Root value={view} onValueChange={setView}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="list">List</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="grid">Grid</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="table">Table</SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </View>
    </Card>
  );
}

function RadioGroupPattern() {
  const [selected, setSelected] = React.useState('option1');

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Radio Group</Heading>
        <RadioGroup.Root value={selected} onValueChange={setSelected}>
          <View style={{ gap: 8 }}>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
              onPress={() => setSelected('option1')}>
              <RadioGroup.Item value="option1" />
              <Text>Option 1</Text>
            </Pressable>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
              onPress={() => setSelected('option2')}>
              <RadioGroup.Item value="option2" />
              <Text>Option 2</Text>
            </Pressable>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
              onPress={() => setSelected('option3')}>
              <RadioGroup.Item value="option3" />
              <Text>Option 3</Text>
            </Pressable>
          </View>
        </RadioGroup.Root>
      </View>
    </Card>
  );
}

function SearchFieldPattern() {
  return (
    <Card>
      <View style={{ gap: 12 }}>
        <Heading size="3">Search Field</Heading>
        <TextField.Root>
          <TextField.Slot>
            <Icon as={Search} size={16} />
          </TextField.Slot>
          <TextField.Input placeholder="Search..." />
          <TextField.Slot>
            <IconButton variant="ghost" size="1">
              <Icon as={X} size={14} />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
      </View>
    </Card>
  );
}

// ============================================================================
// E-commerce Patterns
// ============================================================================

function ResponsiveProductGridPattern() {
  const { colors } = useThemeTokens();
  const { getColumns } = useAdaptiveLayout();

  // Min 200px per item, max 3 columns for comfortable spacing
  const columns = getColumns(200, 3);
  const gap = 16;

  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$79', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: '$199', rating: 4.8 },
    { id: 3, name: 'Portable Speaker', price: '$59', rating: 4.2 },
    { id: 4, name: 'Phone Case', price: '$29', rating: 4.7 },
    { id: 5, name: 'USB-C Cable', price: '$15', rating: 4.4 },
    { id: 6, name: 'Power Bank', price: '$49', rating: 4.6 },
  ];

  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size="2" color="gray">
          {products.length} products • {columns} column{columns > 1 ? 's' : ''}
        </Text>
        <Badge variant="soft" color="gray" size="1">
          <Text>Resize to test</Text>
        </Badge>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {products.map((product) => (
          <View
            key={product.id}
            style={{
              flexGrow: 1,
              flexBasis: columns === 1 ? '100%' : `${Math.floor(100 / columns) - 2}%`,
              maxWidth: columns === 1 ? '100%' : `${Math.floor(100 / columns) - 1}%`,
            }}>
            <Card style={{ padding: 16 }}>
              <View style={{ gap: 12 }}>
                <View
                  style={{
                    height: 100,
                    backgroundColor: colors.palettes.gray.a3,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon as={ShoppingBag} size={28} color={colors.palettes.gray.a8} />
                </View>
                <View style={{ gap: 4 }}>
                  <Text size="2" weight="medium" numberOfLines={1}>
                    {product.name}
                  </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text size="3" weight="bold">
                      {product.price}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <Icon as={Star} size={14} color={colors.palettes.amber['9']} />
                      <Text size="2" color="gray">
                        {product.rating}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        ))}
      </View>
    </View>
  );
}

function ProductCardPattern() {
  const { colors } = useThemeTokens();
  const [liked, setLiked] = React.useState(false);

  return (
    <Card style={{ padding: 0 }}>
      {/* Product Image */}
      <View
        style={{
          height: 180,
          backgroundColor: colors.palettes.gray.a3,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Icon as={ShoppingBag} size={48} color={colors.palettes.gray.a8} />
        {/* Sale Badge */}
        <View style={{ position: 'absolute', top: 12, left: 12 }}>
          <Badge color="danger" size="1">
            <Text>-20%</Text>
          </Badge>
        </View>
        {/* Wishlist Button */}
        <View style={{ position: 'absolute', top: 8, right: 8 }}>
          <IconButton
            variant="surface"
            size="2"
            color={liked ? 'danger' : 'gray'}
            onPress={() => setLiked(!liked)}>
            <Icon as={Heart} size={16} />
          </IconButton>
        </View>
      </View>
      <View style={{ padding: 16, gap: 8 }}>
        {/* Rating */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              key={star}
              as={Star}
              size={14}
              color={star <= 4 ? colors.palettes.amber['9'] : colors.palettes.gray.a6}
              fill={star <= 4 ? colors.palettes.amber['9'] : 'transparent'}
            />
          ))}
          <Text size="1" color="gray" style={{ marginLeft: 4 }}>
            (128)
          </Text>
        </View>
        {/* Title & Price */}
        <Text size="2" weight="medium" numberOfLines={2}>
          Wireless Bluetooth Headphones with Active Noise Cancellation
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
          <Text size="4" weight="bold">
            $79.99
          </Text>
          <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
            $99.99
          </Text>
        </View>
        {/* Add to Cart */}
        <Button variant="solid" size="3" style={{ marginTop: 4 }}>
          <Icon as={ShoppingCart} size={16} />
          <Text>Add to Cart</Text>
        </Button>
      </View>
    </Card>
  );
}

function CartItemPattern() {
  const { colors } = useThemeTokens();
  const [quantity, setQuantity] = React.useState(2);

  return (
    <Card style={{ padding: 0 }}>
      <View style={{ flexDirection: 'row', padding: 16, gap: 12 }}>
        {/* Product Image */}
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: colors.palettes.gray.a3,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon as={ShoppingBag} size={32} color={colors.palettes.gray.a8} />
        </View>
        {/* Details */}
        <View style={{ flex: 1, gap: 4 }}>
          <Text size="2" weight="medium" numberOfLines={2}>
            Wireless Bluetooth Headphones
          </Text>
          <Text size="1" color="gray">
            Color: Black
          </Text>
          <Text size="3" weight="bold">
            $79.99
          </Text>
        </View>
      </View>
      <Separator size="4" />
      {/* Quantity Controls */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <IconButton
            variant="surface"
            size="2"
            onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Icon as={Minus} size={16} />
          </IconButton>
          <Text size="3" weight="medium" style={{ minWidth: 24, textAlign: 'center' }}>
            {quantity}
          </Text>
          <IconButton variant="surface" size="2" onPress={() => setQuantity(quantity + 1)}>
            <Icon as={Plus} size={16} />
          </IconButton>
        </View>
        <Button variant="ghost" size="2" color="danger">
          <Icon as={Trash2} size={16} />
          <Text>Remove</Text>
        </Button>
      </View>
    </Card>
  );
}

function OrderSummaryPattern() {
  return (
    <Card>
      <View style={{ gap: 16 }}>
        <Heading size="4">Order Summary</Heading>

        <View style={{ gap: 12 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text color="gray">Subtotal (3 items)</Text>
            <Text weight="medium">$239.97</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text color="gray">Shipping</Text>
            <Text weight="medium" color="success">
              Free
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text color="gray">Tax</Text>
            <Text weight="medium">$19.20</Text>
          </View>
        </View>

        <Separator size="4" />

        {/* Discount Code */}
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <TextField.Input placeholder="Discount code" />
          </View>
          <Button variant="surface">
            <Text>Apply</Text>
          </Button>
        </View>

        <Separator size="4" />

        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text size="4" weight="bold">
            Total
          </Text>
          <Text size="5" weight="bold">
            $259.17
          </Text>
        </View>

        <Button variant="solid" size="4">
          <Text>Checkout</Text>
        </Button>
      </View>
    </Card>
  );
}

function FlashSaleBannerPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card
      style={{
        padding: 0,
        backgroundColor: colors.palettes.pink.a2,
        borderWidth: 1,
        borderColor: colors.palettes.pink.a4,
      }}>
      <View style={{ padding: 20, gap: 16 }}>
        {/* Header row */}
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Badge color="pink" variant="soft" size="1">
            <Icon as={Zap} size={10} />
            <Text>Limited Time</Text>
          </Badge>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: colors.palettes.pink['9'],
              }}
            />
            <Text size="1" weight="medium" style={{ color: colors.palettes.pink.a11 }}>
              Ends in 02:34:56
            </Text>
          </View>
        </View>

        {/* Main content */}
        <View style={{ gap: 4 }}>
          <Text size="5" weight="bold" style={{ color: colors.palettes.pink.a12 }}>
            Flash Sale
          </Text>
          <Text size="3" style={{ color: colors.palettes.pink.a11 }}>
            Up to 50% off on selected items. Don't miss out.
          </Text>
        </View>

        {/* CTA */}
        <Button variant="solid" color="pink" size="3">
          <Text>Shop Now</Text>
          <Icon as={ChevronRight} size={16} />
        </Button>
      </View>
    </Card>
  );
}

function ShippingOptionsPattern() {
  const { colors } = useThemeTokens();
  const [selected, setSelected] = React.useState('standard');

  const options = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      price: 'Free',
      time: '5-7 business days',
      icon: Truck,
    },
    {
      id: 'express',
      name: 'Express Shipping',
      price: '$9.99',
      time: '2-3 business days',
      icon: Zap,
    },
    { id: 'overnight', name: 'Overnight', price: '$24.99', time: 'Next business day', icon: Clock },
  ];

  return (
    <RadioGroup.Root value={selected} onValueChange={setSelected}>
      <List.Root>
        {options.map((option, index) => (
          <React.Fragment key={option.id}>
            {index > 0 && <List.Separator />}
            <List.Item onPress={() => setSelected(option.id)}>
              <List.ItemSlot>
                <RadioGroup.Item value={option.id} />
              </List.ItemSlot>
              <List.ItemSlot>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor:
                      selected === option.id ? colors.palettes.accent.a3 : colors.palettes.gray.a3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    as={option.icon}
                    size={20}
                    color={
                      selected === option.id ? colors.palettes.accent.a11 : colors.palettes.gray.a11
                    }
                  />
                </View>
              </List.ItemSlot>
              <List.ItemContent>
                <List.ItemTitle>{option.name}</List.ItemTitle>
                <List.ItemDescription>{option.time}</List.ItemDescription>
              </List.ItemContent>
              <List.ItemSlot>
                <Text weight="medium" color={option.price === 'Free' ? 'success' : undefined}>
                  {option.price}
                </Text>
              </List.ItemSlot>
            </List.Item>
          </React.Fragment>
        ))}
      </List.Root>
    </RadioGroup.Root>
  );
}

function PaymentMethodPattern() {
  const { colors } = useThemeTokens();
  const [selected, setSelected] = React.useState('visa');

  return (
    <RadioGroup.Root value={selected} onValueChange={setSelected}>
      <List.Root>
        {[
          { id: 'visa', name: 'Visa', last4: '4242', expiry: '12/25' },
          { id: 'mastercard', name: 'Mastercard', last4: '8888', expiry: '03/26' },
        ].map((card, index) => (
          <React.Fragment key={card.id}>
            {index > 0 && <List.Separator />}
            <List.Item onPress={() => setSelected(card.id)}>
              <List.ItemSlot>
                <RadioGroup.Item value={card.id} />
              </List.ItemSlot>
              <List.ItemSlot>
                <View
                  style={{
                    width: 48,
                    height: 32,
                    borderRadius: 6,
                    backgroundColor: colors.palettes.gray.a3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: colors.stroke,
                  }}>
                  <Icon as={CreditCard} size={20} color={colors.palettes.gray.a11} />
                </View>
              </List.ItemSlot>
              <List.ItemContent>
                <List.ItemTitle>
                  {card.name} •••• {card.last4}
                </List.ItemTitle>
                <List.ItemDescription>Expires {card.expiry}</List.ItemDescription>
              </List.ItemContent>
            </List.Item>
          </React.Fragment>
        ))}
        <List.Separator />
        <List.Item onPress={() => {}}>
          <List.ItemSlot>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: colors.palettes.accent['9'],
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon as={Plus} size={14} color={colors.palettes.accent.a11} />
            </View>
          </List.ItemSlot>
          <List.ItemContent>
            <Text weight="medium" color="accent">
              Add new card
            </Text>
          </List.ItemContent>
        </List.Item>
      </List.Root>
    </RadioGroup.Root>
  );
}

function OrderStatusPattern() {
  const { colors } = useThemeTokens();
  const steps = [
    { id: 'ordered', label: 'Ordered', date: 'Dec 15', completed: true },
    { id: 'shipped', label: 'Shipped', date: 'Dec 16', completed: true },
    { id: 'transit', label: 'In Transit', date: 'Dec 17', completed: true, active: true },
    { id: 'delivered', label: 'Delivered', date: 'Dec 19', completed: false },
  ];

  return (
    <Card>
      <View style={{ gap: 16 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Heading size="4">Order Status</Heading>
          <Badge color="info" size="1">
            <Text>In Transit</Text>
          </Badge>
        </View>

        <View style={{ gap: 0 }}>
          {steps.map((step, index) => (
            <View key={step.id} style={{ flexDirection: 'row', gap: 12 }}>
              {/* Timeline */}
              <View style={{ alignItems: 'center', width: 24 }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: step.completed
                      ? colors.palettes.success['9']
                      : colors.palettes.gray.a4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {step.completed && <Icon as={Check} size={14} color="white" />}
                </View>
                {index < steps.length - 1 && (
                  <View
                    style={{
                      width: 2,
                      height: 32,
                      backgroundColor: steps[index + 1].completed
                        ? colors.palettes.success['9']
                        : colors.palettes.gray.a4,
                    }}
                  />
                )}
              </View>
              {/* Content */}
              <View style={{ flex: 1, paddingBottom: index < steps.length - 1 ? 16 : 0 }}>
                <Text weight={step.active ? 'bold' : 'medium'}>{step.label}</Text>
                <Text size="1" color="gray">
                  {step.date}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Card>
  );
}

function ProductReviewPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Avatar fallback="MJ" size="3" color="blue" />
            <View style={{ gap: 2 }}>
              <Text weight="medium">Michael Johnson</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    as={Star}
                    size={12}
                    color={star <= 5 ? colors.palettes.amber['9'] : colors.palettes.gray.a6}
                    fill={star <= 5 ? colors.palettes.amber['9'] : 'transparent'}
                  />
                ))}
              </View>
            </View>
          </View>
          <Text size="1" color="gray">
            2 days ago
          </Text>
        </View>

        <Text size="3" color="gray">
          Absolutely love these headphones! The noise cancellation is incredible and the battery
          life exceeds expectations. Highly recommend for anyone looking for premium audio quality.
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <Button variant="ghost" size="2">
            <Icon as={ThumbsUp} size={14} />
            <Text>Helpful (24)</Text>
          </Button>
        </View>
      </View>
    </Card>
  );
}

function WishlistItemPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card style={{ padding: 0 }}>
      <View style={{ flexDirection: 'row', padding: 16, gap: 12 }}>
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: colors.palettes.gray.a3,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon as={ShoppingBag} size={32} color={colors.palettes.gray.a8} />
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <Text size="2" weight="medium" numberOfLines={2}>
            Premium Leather Wallet
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon
                key={star}
                as={Star}
                size={10}
                color={star <= 4 ? colors.palettes.amber['9'] : colors.palettes.gray.a6}
                fill={star <= 4 ? colors.palettes.amber['9'] : 'transparent'}
              />
            ))}
            <Text size="0" color="gray">
              (89)
            </Text>
          </View>
          <Text size="3" weight="bold">
            $49.99
          </Text>
        </View>
      </View>
      <Separator size="4" />
      <View style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12, gap: 8 }}>
        <Button variant="solid" size="2" style={{ flex: 1 }}>
          <Icon as={ShoppingCart} size={14} />
          <Text>Move to Cart</Text>
        </Button>
        <IconButton variant="surface" size="2" color="danger">
          <Icon as={Trash2} size={16} />
        </IconButton>
      </View>
    </Card>
  );
}

// ============================================================================
// Fun Apps / Gamification Patterns
// ============================================================================

function AchievementPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card
      style={{
        padding: 0,
        backgroundColor: colors.panelSolid,
      }}>
      {/* Gradient header area */}
      <View
        style={{
          paddingTop: 32,
          paddingBottom: 24,
          paddingHorizontal: 24,
          alignItems: 'center',
          backgroundColor: colors.palettes.amber.a2,
          borderBottomWidth: 1,
          borderBottomColor: colors.stroke,
        }}>
        {/* Badge with glow effect */}
        <View
          style={{
            width: 88,
            height: 88,
            borderRadius: 44,
            backgroundColor: colors.palettes.amber['9'],
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.palettes.amber['9'],
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            elevation: 8,
          }}>
          <Icon as={Trophy} size={40} color="white" />
        </View>
      </View>

      {/* Content */}
      <View style={{ padding: 24, alignItems: 'center', gap: 16 }}>
        <View style={{ alignItems: 'center', gap: 8 }}>
          <Badge color="amber" variant="soft" size="1" style={{ alignSelf: 'center' }}>
            <Icon as={Sparkles} size={10} />
            <Text>Achievement Unlocked</Text>
          </Badge>
          <Heading size="5" style={{ textAlign: 'center' }}>
            First Purchase
          </Heading>
          <Text size="3" color="gray" style={{ textAlign: 'center', maxWidth: 280 }}>
            You've completed your first purchase. Welcome to the club!
          </Text>
        </View>

        {/* Stats row */}
        <View
          style={{
            flexDirection: 'row',
            gap: 24,
            paddingVertical: 16,
            paddingHorizontal: 24,
            backgroundColor: colors.palettes.gray.a2,
            borderRadius: 12,
          }}>
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text size="4" weight="bold">
              +50
            </Text>
            <Text size="1" color="gray">
              XP Earned
            </Text>
          </View>
          <Separator orientation="vertical" size="4" />
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text size="4" weight="bold">
              1/10
            </Text>
            <Text size="1" color="gray">
              Completed
            </Text>
          </View>
          <Separator orientation="vertical" size="4" />
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text size="4" weight="bold" color="amber">
              Rare
            </Text>
            <Text size="1" color="gray">
              Rarity
            </Text>
          </View>
        </View>

        {/* Actions */}
        <View style={{ flexDirection: 'row', gap: 12, width: '100%' }}>
          <Button variant="soft" color="gray" size="3" style={{ flex: 1 }}>
            <Text>Dismiss</Text>
          </Button>
          <Button variant="solid" size="3" style={{ flex: 1 }}>
            <Icon as={Share} size={16} />
            <Text>Share</Text>
          </Button>
        </View>
      </View>
    </Card>
  );
}

function StreakCounterPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            backgroundColor: colors.palettes.orange.a3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon as={Flame} size={28} color={colors.palettes.orange['9']} />
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
            <Text size="6" weight="bold">
              7
            </Text>
            <Text size="3" weight="medium">
              Day Streak
            </Text>
          </View>
          <Text size="2" color="gray">
            Keep it up! You're on fire 🔥
          </Text>
        </View>
      </View>
    </Card>
  );
}

function LeaderboardPattern() {
  const { colors } = useThemeTokens();

  const entries = [
    { rank: 1, name: 'Sarah Chen', points: 12450, avatar: 'SC', color: 'pink' as const },
    { rank: 2, name: 'Alex Kim', points: 11200, avatar: 'AK', color: 'blue' as const },
    { rank: 3, name: 'Jordan Lee', points: 10890, avatar: 'JL', color: 'green' as const },
    { rank: 4, name: 'You', points: 9540, avatar: 'ME', color: 'accent' as const, isUser: true },
  ];

  return (
    <List.Root variant="soft">
      {entries.map((entry, index) => {
        return (
          <React.Fragment key={entry.rank}>
            {index > 0 && <List.Separator />}
            <List.Item
              style={entry.isUser ? { backgroundColor: colors.palettes.gray['a3'] } : undefined}>
              <List.ItemSlot>
                <Text
                  size="2"
                  weight="bold"
                  style={{ width: 24, textAlign: 'center' }}
                  color={entry.rank <= 3 ? undefined : 'gray'}>
                  {entry.rank}
                </Text>
              </List.ItemSlot>

              <List.ItemSlot>
                <Avatar fallback={entry.avatar} size="2" color={entry.color} />
              </List.ItemSlot>
              <List.ItemContent>
                <Text weight={entry.isUser ? 'bold' : 'medium'}>{entry.name}</Text>
              </List.ItemContent>
              <List.ItemSlot>
                <Text weight="medium" color={entry.color}>
                  {entry.points.toLocaleString()} pts
                </Text>
              </List.ItemSlot>
            </List.Item>
          </React.Fragment>
        );
      })}
    </List.Root>
  );
}

function XPProgressPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: colors.palettes.purple['9'],
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text size="2" weight="bold" style={{ color: 'white' }}>
                12
              </Text>
            </View>
            <Text weight="medium">Level 12</Text>
          </View>
          <Badge color="purple" size="1">
            <Icon as={Sparkles} size={10} />
            <Text>250 XP to go</Text>
          </Badge>
        </View>
        <Progress value={75} size="2" color="purple" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text size="1" color="gray">
            750 / 1,000 XP
          </Text>
          <Text size="1" color="gray">
            Next: Level 13
          </Text>
        </View>
      </View>
    </Card>
  );
}

function DailyChallengePattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                backgroundColor: colors.palettes.cyan.a3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon as={Timer} size={24} color={colors.palettes.cyan.a11} />
            </View>
            <View style={{ gap: 2 }}>
              <Text size="1" color="gray" weight="medium">
                DAILY CHALLENGE
              </Text>
              <Text weight="medium">Complete 5 lessons</Text>
            </View>
          </View>
          <Badge color="amber" size="1">
            <Icon as={Gift} size={10} />
            <Text>+50 XP</Text>
          </Badge>
        </View>
        <Progress value={60} size="2" color="cyan" />
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text size="1" color="gray">
            3 of 5 completed
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Icon as={Clock} size={12} color={colors.palettes.gray.a11} />
            <Text size="1" color="gray">
              8h remaining
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

function SocialPostPattern() {
  const { colors } = useThemeTokens();
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(42);

  return (
    <Card style={{ padding: 0 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          padding: 16,
        }}>
        <Avatar fallback="EW" size="3" color="purple" />
        <View style={{ flex: 1, gap: 2 }}>
          <Text weight="medium">Emma Wilson</Text>
          <Text size="1" color="gray">
            2 hours ago
          </Text>
        </View>
        <IconButton variant="ghost" size="2">
          <Icon as={MoreHorizontal} size={18} />
        </IconButton>
      </View>

      {/* Content */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
        <Text size="3">
          Just finished my morning run! 🏃‍♀️ Nothing beats starting the day with some exercise. Who
          else is working out today?
        </Text>
      </View>

      {/* Image */}
      <View
        style={{
          height: 200,
          backgroundColor: colors.palettes.gray.a3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon as={MapPin} size={48} color={colors.palettes.gray.a8} />
      </View>

      {/* Actions */}
      <View
        style={{
          flexDirection: 'row',
          padding: 12,
          gap: 16,
        }}>
        <Button
          variant="ghost"
          size="2"
          color={liked ? 'danger' : 'gray'}
          onPress={() => {
            setLiked(!liked);
            setLikes(liked ? likes - 1 : likes + 1);
          }}>
          <Icon as={Heart} size={18} />
          <Text>{likes}</Text>
        </Button>
        <Button variant="ghost" size="2" color="gray">
          <Icon as={MessageCircle} size={18} />
          <Text>12</Text>
        </Button>
        <Button variant="ghost" size="2" color="gray">
          <Icon as={Share} size={18} />
        </Button>
      </View>
    </Card>
  );
}

function NowPlayingPattern() {
  const { colors } = useThemeTokens();
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <Card>
      <View style={{ gap: 16 }}>
        {/* Album Art */}
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 8,
              backgroundColor: colors.palettes.pink.a3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon as={Music} size={32} color={colors.palettes.pink.a11} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', gap: 4 }}>
            <Text size="3" weight="bold" numberOfLines={1}>
              Midnight Dreams
            </Text>
            <Text size="2" color="gray" numberOfLines={1}>
              Aurora Synth
            </Text>
            <Text size="1" color="gray">
              Neon Horizons • 2024
            </Text>
          </View>
          <IconButton variant="ghost" size="2">
            <Icon as={Heart} size={20} />
          </IconButton>
        </View>

        {/* Progress */}
        <View style={{ gap: 8 }}>
          <Progress value={35} size="1" />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text size="0" color="gray">
              1:24
            </Text>
            <Text size="0" color="gray">
              3:45
            </Text>
          </View>
        </View>

        {/* Controls */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
          }}>
          <IconButton variant="ghost" size="3">
            <Icon as={SkipBack} size={24} />
          </IconButton>
          <IconButton variant="solid" size="4" onPress={() => setIsPlaying(!isPlaying)}>
            <Icon as={isPlaying ? Pause : Play} size={24} />
          </IconButton>
          <IconButton variant="ghost" size="3">
            <Icon as={SkipForward} size={24} />
          </IconButton>
        </View>
      </View>
    </Card>
  );
}

function PollCardPattern() {
  const { colors } = useThemeTokens();
  const [voted, setVoted] = React.useState<string | null>(null);

  const options = [
    { id: 'react', label: 'React Native', votes: 156 },
    { id: 'flutter', label: 'Flutter', votes: 89 },
    { id: 'native', label: 'Native (Swift/Kotlin)', votes: 67 },
  ];

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <Card>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Text size="3" weight="medium">
            What's your preferred mobile framework?
          </Text>
          <Text size="1" color="gray">
            {totalVotes} votes • 2 days left
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          {options.map((option) => {
            const percentage = Math.round((option.votes / totalVotes) * 100);
            const isSelected = voted === option.id;

            return (
              <Pressable
                key={option.id}
                onPress={() => !voted && setVoted(option.id)}
                style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  borderWidth: 1,
                  borderColor: isSelected ? colors.palettes.accent['8'] : colors.stroke,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: voted ? `${percentage}%` : '0%',
                    backgroundColor: isSelected
                      ? colors.palettes.accent.a3
                      : colors.palettes.gray.a3,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <Text weight={isSelected ? 'medium' : 'regular'}>{option.label}</Text>
                  {voted && (
                    <Text size="2" weight="medium">
                      {percentage}%
                    </Text>
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Card>
  );
}

// ============================================================================
// Store / Marketing Patterns
// ============================================================================

function PricingTierPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 16 }}>
        <Badge color="accent" size="1" style={{ alignSelf: 'flex-start' }}>
          <Text>MOST POPULAR</Text>
        </Badge>

        <View style={{ gap: 4 }}>
          <Text size="3" weight="bold">
            Pro Plan
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
            <Text size="7" weight="bold">
              $19
            </Text>
            <Text size="2" color="gray">
              /month
            </Text>
          </View>
        </View>

        <Separator size="4" />

        <View style={{ gap: 12 }}>
          {[
            'Unlimited projects',
            'Advanced analytics',
            'Priority support',
            'Custom integrations',
            'Team collaboration',
          ].map((feature) => (
            <View key={feature} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: colors.palettes.success.a3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon as={Check} size={12} color={colors.palettes.success['9']} />
              </View>
              <Text size="2">{feature}</Text>
            </View>
          ))}
        </View>

        <Button variant="solid" size="4">
          <Text>Get Started</Text>
        </Button>
      </View>
    </Card>
  );
}

function TestimonialPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card>
      <View style={{ gap: 16 }}>
        <Icon as={Quote} size={32} color={colors.palettes.gray.a6} />

        <Text size="3" style={{ fontStyle: 'italic' }}>
          "This product has completely transformed how our team works. We've seen a 40% increase in
          productivity and the support team is incredibly responsive."
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              key={star}
              as={Star}
              size={16}
              color={colors.palettes.amber['9']}
              fill={colors.palettes.amber['9']}
            />
          ))}
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Avatar fallback="JD" size="3" color="blue" />
          <View style={{ gap: 2 }}>
            <Text weight="medium">Jennifer Davis</Text>
            <Text size="1" color="gray">
              CTO at TechCorp
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

function FeatureShowcasePattern() {
  const { colors } = useThemeTokens();

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with sub-100ms response times',
      color: 'amber' as const,
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time sync',
      color: 'blue' as const,
    },
    {
      icon: Sparkles,
      title: 'AI Powered',
      description: 'Smart suggestions that learn from your workflow',
      color: 'purple' as const,
    },
  ];

  return (
    <View style={{ gap: 12 }}>
      {features.map((feature) => (
        <Card key={feature.title} variant="soft">
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                backgroundColor: colors.palettes[feature.color].a3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon as={feature.icon} size={24} color={colors.palettes[feature.color].a11} />
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text weight="medium">{feature.title}</Text>
              <Text size="2" color="gray">
                {feature.description}
              </Text>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}

function TeamMemberPattern() {
  return (
    <Card>
      <View style={{ alignItems: 'center', gap: 12 }}>
        <Avatar fallback="AK" size="7" color="blue" />
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Text size="3" weight="bold">
            Alex Kim
          </Text>
          <Text size="2" color="gray">
            Senior Designer
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <IconButton variant="soft" size="2" color="gray">
            <Icon as={Twitter} size={16} />
          </IconButton>
          <IconButton variant="soft" size="2" color="gray">
            <Icon as={Linkedin} size={16} />
          </IconButton>
          <IconButton variant="soft" size="2" color="gray">
            <Icon as={Send} size={16} />
          </IconButton>
        </View>
      </View>
    </Card>
  );
}

function NewsletterSignupPattern() {
  const { colors } = useThemeTokens();

  return (
    <Card
      variant="soft"
      style={{
        backgroundColor: colors.palettes.accent.a2,
        borderWidth: 1,
        borderColor: colors.palettes.accent.a5,
      }}>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Heading size="4" style={{ color: colors.palettes.accent.a12 }}>
            Stay in the loop
          </Heading>
          <Text size="3" style={{ color: colors.palettes.accent.a11 }}>
            Get the latest updates, tips, and exclusive offers delivered to your inbox.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <TextField.Root variant="soft" color="accent">
              <TextField.Input placeholder="Enter your email" />
            </TextField.Root>
          </View>
          <Button variant="solid">
            <Text>Subscribe</Text>
          </Button>
        </View>
        <Text size="1" style={{ color: colors.palettes.accent.a11 }}>
          No spam, unsubscribe anytime.
        </Text>
      </View>
    </Card>
  );
}

function AppStatsPattern() {
  const { colors } = useThemeTokens();

  const stats = [
    { value: '10M+', label: 'Downloads', icon: Download },
    { value: '4.8★', label: 'Rating', icon: Star },
    { value: '#1', label: 'Top Charts', icon: Trophy },
  ];

  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      {stats.map((stat) => (
        <Card key={stat.label} style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ alignItems: 'center', gap: 8 }}>
            <Icon as={stat.icon} size={24} color={colors.palettes.accent.a11} />
            <Text size="4" weight="bold">
              {stat.value}
            </Text>
            <Text size="1" color="gray">
              {stat.label}
            </Text>
          </View>
        </Card>
      ))}
    </View>
  );
}

// ============================================================================
// Main Screen
// ============================================================================

export default function DesignPatternsScreen() {
  const { colors } = useThemeTokens();
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
          title: 'Design Patterns',
          ...headerOptions,
        }}
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          paddingTop: topPadding,
          paddingBottom: 48,
          gap: 24,
          maxWidth: isWide ? MAX_CONTENT_WIDTH + horizontalPadding * 2 : undefined,
          alignSelf: isWide ? 'center' : undefined,
          width: '100%',
        }}>
        {/* Header */}
        <View style={{ gap: 4 }}>
          <Heading size="6">Design Patterns</Heading>
          <Text size="3" color="gray">
            Common UI patterns built with Frosted UI
          </Text>
        </View>

        {/* Patterns */}
        <Section title="Title + Description">
          <TitleDescriptionPattern />
        </Section>

        <Section title="Form Fields">
          <FormFieldPattern />
        </Section>

        <Section title="Search Field">
          <SearchFieldPattern />
        </Section>

        <Section title="List Items">
          <ListItemPattern />
        </Section>

        <Section title="Settings List">
          <SettingsListPattern />
        </Section>

        <Section title="Stat Cards">
          <StatCardsPattern />
        </Section>

        <Section title="Card Variants">
          <CardVariantsPattern />
        </Section>

        <Section title="Buy Box (E-commerce)">
          <BuyBoxPattern />
        </Section>

        <Section title="Button Patterns">
          <ButtonPatternsSection />
        </Section>

        <Section title="Empty State">
          <EmptyStatePattern />
        </Section>

        <Section title="Loading States">
          <LoadingStatesPattern />
        </Section>

        <Section title="Feedback & Status">
          <FeedbackPattern />
        </Section>

        <Section title="Validation Error">
          <ValidationErrorPattern />
        </Section>

        <Section title="Dialogs">
          <DialogPattern />
        </Section>

        <Section title="Navigation Header">
          <NavigationPattern />
        </Section>

        <Section title="Tabs">
          <TabsPattern />
        </Section>

        <Section title="Segmented Control">
          <SegmentedControlPattern />
        </Section>

        <Section title="Radio Group">
          <RadioGroupPattern />
        </Section>

        {/* E-commerce Section */}
        <View style={{ gap: 8, marginTop: 16 }}>
          <Heading size="5" color="gray">
            E-commerce
          </Heading>
          <Separator size="4" />
        </View>

        <Section title="Responsive Product Grid">
          <ResponsiveProductGridPattern />
        </Section>

        <Section title="Product Card">
          <ProductCardPattern />
        </Section>

        <Section title="Cart Item">
          <CartItemPattern />
        </Section>

        <Section title="Order Summary">
          <OrderSummaryPattern />
        </Section>

        <Section title="Flash Sale Banner">
          <FlashSaleBannerPattern />
        </Section>

        <Section title="Shipping Options">
          <ShippingOptionsPattern />
        </Section>

        <Section title="Payment Methods">
          <PaymentMethodPattern />
        </Section>

        <Section title="Order Status">
          <OrderStatusPattern />
        </Section>

        <Section title="Product Review">
          <ProductReviewPattern />
        </Section>

        <Section title="Wishlist Item">
          <WishlistItemPattern />
        </Section>

        {/* Fun Apps Section */}
        <View style={{ gap: 8, marginTop: 16 }}>
          <Heading size="5" color="gray">
            Fun Apps & Gamification
          </Heading>
          <Separator size="4" />
        </View>

        <Section title="Achievement Unlocked">
          <AchievementPattern />
        </Section>

        <Section title="Streak Counter">
          <StreakCounterPattern />
        </Section>

        <Section title="Leaderboard">
          <LeaderboardPattern />
        </Section>

        <Section title="XP Progress">
          <XPProgressPattern />
        </Section>

        <Section title="Daily Challenge">
          <DailyChallengePattern />
        </Section>

        <Section title="Social Post">
          <SocialPostPattern />
        </Section>

        <Section title="Now Playing">
          <NowPlayingPattern />
        </Section>

        <Section title="Poll Card">
          <PollCardPattern />
        </Section>

        {/* Store / Marketing Section */}
        <View style={{ gap: 8, marginTop: 16 }}>
          <Heading size="5" color="gray">
            Store & Marketing
          </Heading>
          <Separator size="4" />
        </View>

        <Section title="Pricing Tier">
          <PricingTierPattern />
        </Section>

        <Section title="Testimonial">
          <TestimonialPattern />
        </Section>

        <Section title="Feature Showcase">
          <FeatureShowcasePattern />
        </Section>

        <Section title="Team Member">
          <TeamMemberPattern />
        </Section>

        <Section title="Newsletter Signup">
          <NewsletterSignupPattern />
        </Section>

        <Section title="App Stats">
          <AppStatsPattern />
        </Section>
      </ScrollView>
    </>
  );
}
