import React from 'react';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';

type AnimatedViewProps = React.ComponentProps<typeof Animated.View>;

/**
 * This component is used to wrap animated views that should only be animated on native.
 * @param props - The props for the animated view.
 * @returns The animated view if the platform is native, otherwise the children.
 * @example
 * <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
 *   <Text>I am only animated on native</Text>
 * </NativeOnlyAnimatedView>
 */
const NativeOnlyAnimatedView = React.forwardRef<any, AnimatedViewProps>(
  ({ children, ...rest }, ref) => {
    if (Platform.OS === 'web') {
      return <>{children as React.ReactNode}</>;
    }

    // Animated.View expects its own ref type; cast to satisfy differing React typings.
    return <Animated.View ref={ref as any} {...rest} />;
  }
);

export { NativeOnlyAnimatedView };
