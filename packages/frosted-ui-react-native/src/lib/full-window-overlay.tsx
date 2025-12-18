import React from 'react';
import { Platform } from 'react-native';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

/**
 * A wrapper that uses FullWindowOverlay on iOS and a Fragment on other platforms.
 * This is implemented as a component rather than a top-level constant to avoid
 * accessing Platform.OS at module load time, which can cause issues in monorepos
 * where modules are loaded before React Native is fully initialized.
 */
export function FullWindowOverlay({ children }: { children: React.ReactNode }) {
  if (Platform.OS === 'ios') {
    return <RNFullWindowOverlay>{children}</RNFullWindowOverlay>;
  }
  return <>{children}</>;
}

