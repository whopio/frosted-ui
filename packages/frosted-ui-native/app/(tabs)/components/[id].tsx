import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button, ButtonText } from '@/components/ui/button';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width, height } = Dimensions.get('window');

interface ComponentExample {
  id: string;
  title: string;
  description: string;
  code: string;
  component: React.ReactNode;
}

const componentExamples: Record<string, ComponentExample[]> = {
  button: [
    {
      id: 'primary',
      title: 'Primary Button',
      description: 'Default solid button with primary action',
      code: '<Button variant="solid" action="primary">\n  <ButtonText>Primary Button</ButtonText>\n</Button>',
      component: (
        <Button variant="solid" color="blue">
          <ButtonText>Primary Button</ButtonText>
        </Button>
      ),
    },
    {
      id: 'positive',
      title: 'Positive Button',
      description: 'Solid button with positive action (success)',
      code: '<Button variant="solid" action="positive">\n  <ButtonText>Success</ButtonText>\n</Button>',
      component: (
        <Button variant="outline">
          <ButtonText>Success</ButtonText>
        </Button>
      ),
    },
    {
      id: 'negative',
      title: 'Negative Button',
      description: 'Solid button with negative action (error)',
      code: '<Button variant="solid" action="negative">\n  <ButtonText>Delete</ButtonText>\n</Button>',
      component: (
        <Button variant="solid" action="negative">
          <ButtonText>Delete</ButtonText>
        </Button>
      ),
    },
    {
      id: 'outline',
      title: 'Outline Button',
      description: 'Outlined button with secondary styling',
      code: '<Button variant="outline" action="secondary">\n  <ButtonText>Secondary</ButtonText>\n</Button>',
      component: (
        <Button variant="outline" action="secondary">
          <ButtonText>Secondary</ButtonText>
        </Button>
      ),
    },
    {
      id: 'link',
      title: 'Link Button',
      description: 'Link-style button with minimal styling',
      code: '<Button variant="link" action="primary">\n  <ButtonText>Learn More</ButtonText>\n</Button>',
      component: (
        <Button variant="link" action="primary">
          <ButtonText>Learn More</ButtonText>
        </Button>
      ),
    },
    {
      id: 'sizes',
      title: 'Button Sizes',
      description: 'Different button sizes from xs to xl',
      code: '<Button size="xs">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="xl">Large</Button>',
      component: (
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Button size="xs" action="primary">
            <ButtonText>Small</ButtonText>
          </Button>
          <Button size="md" action="primary">
            <ButtonText>Medium</ButtonText>
          </Button>
          <Button size="xl" action="primary">
            <ButtonText>Large</ButtonText>
          </Button>
        </View>
      ),
    },
  ],
  text: [
    {
      id: 'title',
      title: 'Title Text',
      description: 'Large title text with bold styling',
      code: '<ThemedText type="title">Title Text</ThemedText>',
      component: <ThemedText type="title">Title Text</ThemedText>,
    },
    {
      id: 'subtitle',
      title: 'Subtitle Text',
      description: 'Medium subtitle text',
      code: '<ThemedText type="subtitle">Subtitle Text</ThemedText>',
      component: <ThemedText type="subtitle">Subtitle Text</ThemedText>,
    },
    {
      id: 'body',
      title: 'Body Text',
      description: 'Regular body text',
      code: '<ThemedText>Body Text</ThemedText>',
      component: <ThemedText>Body Text</ThemedText>,
    },
    {
      id: 'defaultSemiBold',
      title: 'Semi Bold Text',
      description: 'Text with semi-bold weight',
      code: '<ThemedText type="defaultSemiBold">Semi Bold Text</ThemedText>',
      component: <ThemedText type="defaultSemiBold">Semi Bold Text</ThemedText>,
    },
    {
      id: 'textVariants',
      title: 'Text Variants',
      description: 'Different text styles in a hierarchy',
      code: '<ThemedText type="title">Title</ThemedText>\n<ThemedText type="subtitle">Subtitle</ThemedText>\n<ThemedText>Body</ThemedText>',
      component: (
        <View style={{ gap: 8 }}>
          <ThemedText type="title">Title</ThemedText>
          <ThemedText type="subtitle">Subtitle</ThemedText>
          <ThemedText>Body Text</ThemedText>
        </View>
      ),
    },
  ],
  view: [
    {
      id: 'basic',
      title: 'Basic View',
      description: 'Simple themed container',
      code: '<ThemedView style={{ padding: 20 }}>\n  <ThemedText>Content</ThemedText>\n</ThemedView>',
      component: (
        <ThemedView style={{ padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 8 }}>
          <ThemedText>Content</ThemedText>
        </ThemedView>
      ),
    },
  ],
  icon: [
    {
      id: 'symbol',
      title: 'Icon Symbol',
      description: 'SF Symbol icon component',
      code: '<IconSymbol size={24} name="star.fill" color="#FFD700" />',
      component: <IconSymbol size={24} name="star.fill" color="#FFD700" />,
    },
    {
      id: 'icons',
      title: 'Icon Collection',
      description: 'Various icon symbols with different sizes',
      code: '<IconSymbol size={16} name="house.fill" />\n<IconSymbol size={24} name="heart.fill" color="red" />\n<IconSymbol size={32} name="star.fill" color="#FFD700" />',
      component: (
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <IconSymbol size={16} name="house.fill" color="#000000" />
          <IconSymbol size={24} name="heart.fill" color="red" />
          <IconSymbol size={32} name="star.fill" color="#FFD700" />
        </View>
      ),
    },
  ],
  collapsible: [
    {
      id: 'basic',
      title: 'Collapsible Content',
      description: 'Expandable content component',
      code: '<Collapsible>\n  <CollapsibleTrigger>\n    <Text>Toggle Content</Text>\n  </CollapsibleTrigger>\n  <CollapsibleContent>\n    <Text>Hidden content</Text>\n  </CollapsibleContent>\n</Collapsible>',
      component: (
        <View style={{ padding: 16, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 8 }}>
          <Text>Collapsible Component Example</Text>
        </View>
      ),
    },
  ],
  parallax: [
    {
      id: 'basic',
      title: 'Parallax ScrollView',
      description: 'Scroll view with parallax effects',
      code: '<ParallaxScrollView>\n  <Text>Content with parallax</Text>\n</ParallaxScrollView>',
      component: (
        <View style={{ padding: 16, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 8 }}>
          <Text>Parallax ScrollView Example</Text>
        </View>
      ),
    },
  ],
};

const componentNames: Record<string, string> = {
  button: 'Button',
  text: 'Text',
  view: 'View',
  icon: 'Icon',
  collapsible: 'Collapsible',
  parallax: 'ParallaxScrollView',
};

export default function ComponentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  const examples = componentExamples[id] || [];
  const componentName = componentNames[id] || 'Component';

  const handleExamplePress = (exampleId: string) => {
    setSelectedExample(exampleId);
    Animated.spring(slideAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseSlide = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      setSelectedExample(null);
    });
  };

  const selectedExampleData = selectedExample ? examples.find((ex) => ex.id === selectedExample) : null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={Colors[colorScheme ?? 'light'].text} />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>{componentName}</ThemedText>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <ThemedText style={styles.description}>
          Explore different variations and examples of the {componentName} component.
        </ThemedText>

        {/* Examples */}
        <View style={styles.examplesContainer}>
          {examples.map((example) => (
            <TouchableOpacity
              key={example.id}
              style={styles.exampleCard}
              onPress={() => handleExamplePress(example.id)}
            >
              <View style={styles.exampleHeader}>
                <ThemedText style={styles.exampleTitle}>{example.title}</ThemedText>
                <Ionicons name="chevron-forward" size={20} color={Colors[colorScheme ?? 'light'].text} />
              </View>
              <ThemedText style={styles.exampleDescription}>{example.description}</ThemedText>
              <View style={styles.examplePreview}>{example.component}</View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Slide-in Detail View */}
      {selectedExampleData && (
        <Animated.View
          style={[
            styles.slideOverlay,
            {
              transform: [
                {
                  translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [width, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.slideContent}>
            {/* Slide Header */}
            <View style={styles.slideHeader}>
              <TouchableOpacity onPress={handleCloseSlide}>
                <Ionicons name="close" size={24} color={Colors[colorScheme ?? 'light'].text} />
              </TouchableOpacity>
              <ThemedText style={styles.slideTitle}>{selectedExampleData.title}</ThemedText>
              <View style={styles.headerSpacer} />
            </View>

            <ScrollView style={styles.slideBody}>
              <ThemedText style={styles.slideDescription}>{selectedExampleData.description}</ThemedText>

              {/* Component Preview */}
              <View style={styles.componentPreview}>
                <ThemedText style={styles.previewLabel}>Preview</ThemedText>
                <View style={styles.previewContainer}>{selectedExampleData.component}</View>
              </View>

              {/* Code Example */}
              <View style={styles.codeSection}>
                <ThemedText style={styles.codeLabel}>Code</ThemedText>
                <View style={styles.codeContainer}>
                  <Text style={styles.codeText}>{selectedExampleData.code}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  examplesContainer: {
    padding: 20,
  },
  exampleCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  exampleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  exampleDescription: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 16,
  },
  examplePreview: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 8,
  },
  slideOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  slideContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 0.85,
    height: height,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  slideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  slideTitle: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    marginLeft: 16,
  },
  slideBody: {
    flex: 1,
    padding: 20,
  },
  slideDescription: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 24,
  },
  componentPreview: {
    marginBottom: 24,
  },
  previewLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  previewContainer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 12,
    alignItems: 'center',
  },
  codeSection: {
    marginBottom: 24,
  },
  codeLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  codeContainer: {
    backgroundColor: '#f6f8fa',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
    color: '#24292e',
  },
});
