import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');

// Component data structure
interface ComponentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

const components: ComponentItem[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'Interactive button component with various styles',
    category: 'Interactive',
    icon: '🔘',
  },
  {
    id: 'text',
    name: 'Text',
    description: 'Styled text component with theme support',
    category: 'Typography',
    icon: '📝',
  },
  {
    id: 'view',
    name: 'View',
    description: 'Container component with theme support',
    category: 'Layout',
    icon: '📦',
  },
  {
    id: 'icon',
    name: 'Icon',
    description: 'Icon component with symbol support',
    category: 'Media',
    icon: '🎨',
  },
  {
    id: 'collapsible',
    name: 'Collapsible',
    description: 'Expandable content component',
    category: 'Interactive',
    icon: '📂',
  },
  {
    id: 'parallax',
    name: 'ParallaxScrollView',
    description: 'Scroll view with parallax effects',
    category: 'Layout',
    icon: '📜',
  },
];

const categories = ['All', 'Interactive', 'Typography', 'Layout', 'Media'];

export default function ComponentsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredComponents =
    selectedCategory === 'All' ? components : components.filter((comp) => comp.category === selectedCategory);

  const handleComponentPress = (componentId: string) => {
    router.push(`/components/${componentId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content ScrollView */}
      <ScrollView style={styles.componentsContainer}>
        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]}
              onPress={() => setSelectedCategory(category)}
            >
              <ThemedText style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}>
                {category}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Components Grid */}
        <View style={styles.grid}>
          {filteredComponents.map((component) => (
            <TouchableOpacity
              key={component.id}
              style={styles.componentCard}
              onPress={() => handleComponentPress(component.id)}
            >
              <View style={styles.componentIcon}>
                <Text style={styles.iconText}>{component.icon}</Text>
              </View>
              <ThemedText style={styles.componentName}>{component.name}</ThemedText>
              <ThemedText style={styles.componentDescription}>{component.description}</ThemedText>
              <View style={styles.componentCategory}>
                <ThemedText style={styles.categoryLabel}>{component.category}</ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  categoryContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  categoryContent: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  categoryButtonActive: {
    backgroundColor: Colors.light.tint,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTextActive: {
    color: 'white',
  },
  componentsContainer: {
    flex: 1,
  },
  grid: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  componentCard: {
    width: (width - 60) / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  componentIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 24,
  },
  componentName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  componentDescription: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 12,
    lineHeight: 16,
  },
  componentCategory: {
    alignSelf: 'flex-start',
  },
  categoryLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.light.tint,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
});
