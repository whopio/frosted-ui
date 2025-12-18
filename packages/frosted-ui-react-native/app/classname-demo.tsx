/**
 * className Demo
 *
 * This demo shows how consumers can style Frosted UI components using NativeWind's className prop.
 * The component library itself is vanilla React Native, but passes className through to
 * underlying RN components, allowing NativeWind users to apply utility classes.
 *
 * For this to work, consumers need NativeWind configured in their app.
 */
import {
  Button,
  Heading,
  Icon,
  IconButton,
  Label,
  Separator,
  Text,
} from '@frosted-ui/react-native';
import { Stack } from 'expo-router';
import { Heart, Rocket, Settings, Star } from 'lucide-react-native';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function ClassNameDemoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'className Styling Demo',
          headerTransparent: true,
        }}
      />
      <ScrollView className="flex-1 bg-background">
        <View className="gap-8 p-4 pt-24">
          {/* Intro Section */}
          <View className="gap-2">
            <Heading size="7">Styling with className</Heading>
            <Text className="text-gray-a11">
              Frosted UI is vanilla React Native, but passes className through to underlying
              components. NativeWind users can style them with utility classes!
            </Text>
          </View>

          <Separator size="4" />

          {/* Text Components */}
          <DemoSection title="Text & Heading">
            <View className="gap-4">
              <Text>Default Text (no className)</Text>

              <Text className="text-blue-9">Text with className="text-blue-9"</Text>

              <Text className="text-lg font-bold text-red-9">
                Text with className="text-lg font-bold text-red-9"
              </Text>

              <Text className="rounded-lg bg-yellow-9 px-3 py-1 text-yellow-9-contrast">
                Text with background className
              </Text>

              <Heading className="text-pink-500">Heading with className="text-pink-500"</Heading>

              <Heading size="5" className="underline decoration-2 underline-offset-4">
                Heading with underline className
              </Heading>
            </View>
          </DemoSection>

          <Separator size="4" />

          {/* Button Components */}
          <DemoSection title="Button & IconButton">
            <View className="gap-4">
              <Button>
                <Text>Default Button</Text>
              </Button>

              <Button className="mt-2">
                <Text>Button with className="mt-2"</Text>
              </Button>

              <Button className="rounded-full">
                <Text>Button with className="rounded-full"</Text>
              </Button>

              <View className="flex-row gap-2">
                <IconButton variant="solid" className="bg-red-9" style={{ borderRadius: 20 }}>
                  <Icon as={Heart} size={18} />
                </IconButton>
                <IconButton variant="solid" className="rotate-12">
                  <Icon as={Star} size={18} />
                </IconButton>
                <IconButton variant="solid" className="opacity-50">
                  <Icon as={Settings} size={18} />
                </IconButton>
              </View>
              <Text className="text-sm text-gray-a10">
                IconButtons with className: bg-red-9, rotate-12, opacity-50
              </Text>
            </View>
          </DemoSection>

          <Separator size="4" />

          {/* Label Component */}
          <DemoSection title="Label">
            <View className="gap-4">
              <Label>Default Label</Label>

              <Label className="text-green-11">Label with className="text-green-600"</Label>

              <Label className="uppercase tracking-widest">
                Label with className="uppercase tracking-widest"
              </Label>
            </View>
          </DemoSection>

          <Separator size="4" />

          {/* Layout with className */}
          <DemoSection title="Layout Composition">
            <View className="gap-4">
              <Text className="text-sm text-gray-a11">
                You can wrap components and use className on the wrapper Views:
              </Text>

              <View className="flex-row items-center gap-4 rounded-xl bg-blue-9 p-4 dark:bg-red-9">
                <Icon as={Rocket} size={24} color="#3b82f6" />
                <View className="flex-1">
                  <Heading size="4">Card Title</Heading>
                  <Text className="text-gray-a11">Using NativeWind for layout styling</Text>
                </View>
                <IconButton variant="ghost">
                  <Icon as={Settings} size={18} />
                </IconButton>
              </View>

              <View className="flex-row flex-wrap gap-2">
                {['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map((color) => (
                  <View
                    key={color}
                    className={`rounded-full px-3 py-1 bg-${color}-100 dark:bg-${color}-900`}>
                    <Text className={`text-${color}-700 dark:text-${color}-300 text-sm`}>
                      {color}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </DemoSection>

          <Separator size="4" />

          {/* How It Works */}
          <DemoSection title="How It Works">
            <View className="gap-4 rounded-xl bg-gray-a2 p-4">
              <Text className="text-sm font-mono">
                {'// All components pass className through\n'}
                {'<Text className="text-blue-500">Styled</Text>\n'}
                {'<Button className="mt-4 rounded-full">\n'}
                {'  <Text>Click me</Text>\n'}
                {'</Button>'}
              </Text>
            </View>
            <Text className="text-sm mt-2 text-gray-a11">
              The component library is vanilla React Native - no NativeWind dependency. It simply
              passes className through to underlying RN components. When you use NativeWind in your
              app, it handles the className → style conversion.
            </Text>
          </DemoSection>

          <View className="h-20" />
        </View>
      </ScrollView>
    </>
  );
}

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-4">
      <Heading size="5" className="text-gray-12">
        {title}
      </Heading>
      {children}
    </View>
  );
}
