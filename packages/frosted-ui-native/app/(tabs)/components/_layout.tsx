import { Stack } from 'expo-router';
import React from 'react';

export default function ComponentsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Components',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Component Details',
        }}
      />
    </Stack>
  );
}
