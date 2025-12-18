import { Text } from '@/components/text';
import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { Image, View, type ImageStyle, type TextStyle, type ViewStyle } from 'react-native';

const avatarSizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const avatarShapes = ['circle', 'square'] as const;

type AvatarSize = (typeof avatarSizes)[number];
type AvatarShape = (typeof avatarShapes)[number];

// Size styles from CSS:
// Size 0: 16px, Size 1: 24px, Size 2: 32px, Size 3: 40px (default)
// Size 4: 48px, Size 5: 64px, Size 6: 80px, Size 7: 96px, Size 8: 128px, Size 9: 160px
function getAvatarSize(size: AvatarSize): number {
  switch (size) {
    case '0':
      return 16;
    case '1':
      return 24;
    case '2':
      return 32;
    case '3':
      return 40;
    case '4':
      return 48;
    case '5':
      return 64;
    case '6':
      return 80;
    case '7':
      return 96;
    case '8':
      return 128;
    case '9':
      return 160;
  }
}

// Font size based on avatar size (approximating cqw units)
function getFallbackFontSize(avatarSize: number, letterCount: 1 | 2): number {
  // 45cqw for 1 letter, 40cqw for 2 letters
  const percentage = letterCount === 1 ? 0.45 : 0.4;
  return Math.round(avatarSize * percentage);
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

type AvatarProps = {
  /** Image source URL */
  src?: string;
  /** Fallback content - string (will generate initials) or ReactNode */
  fallback: React.ReactNode;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Shape of the avatar */
  shape?: AvatarShape;
  /** Accent color for fallback state */
  color?: Color;
};

function Avatar({ src, fallback, size = '3', shape = 'circle', color }: AvatarProps) {
  const { colors } = useThemeTokens();
  const [imageStatus, setImageStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  // Avatar defaults to gray instead of accent
  const palette = colors.palettes[color ?? 'gray'];
  const gray = colors.palettes.gray;

  const avatarSize = getAvatarSize(size);
  const borderRadius = shape === 'circle' ? avatarSize / 2 : Math.max(avatarSize * 0.25, 8);

  // Process fallback - convert string to initials
  const fallbackContent = React.useMemo(() => {
    if (typeof fallback === 'string') {
      return getInitials(fallback);
    }
    return fallback;
  }, [fallback]);

  const showImage = src && imageStatus === 'loaded';
  const showFallback = !src || imageStatus === 'error' || imageStatus === 'loading';

  // Base style
  const baseStyle: ViewStyle = {
    width: avatarSize,
    height: avatarSize,
    borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  };

  // State-based styles
  let stateStyle: ViewStyle;
  if (showImage) {
    // Image loaded - gray border
    stateStyle = {
      borderWidth: 1,
      borderColor: gray.a5,
    };
  } else {
    // Fallback state - accent background and border
    stateStyle = {
      backgroundColor: palette.a3,
      borderWidth: 1,
      borderColor: palette.a5,
    };
  }

  const combinedStyle: ViewStyle = { ...baseStyle, ...stateStyle };

  // Image style
  const imageStyle: ImageStyle = {
    width: avatarSize,
    height: avatarSize,
    borderRadius,
  };

  // Fallback styles
  const isTextFallback = typeof fallbackContent === 'string';
  const letterCount = isTextFallback ? (fallbackContent.length === 1 ? 1 : 2) : 1;
  const fontSize = getFallbackFontSize(avatarSize, letterCount as 1 | 2);

  const fallbackContainerStyle: ViewStyle = {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  };

  const textStyle: TextStyle = {
    fontSize,
    fontWeight: '500',
    color: palette.a11,
    textTransform: 'uppercase',
    letterSpacing: fontSize * 0.05,
  };

  return (
    <View style={combinedStyle}>
      {/* Fallback - always rendered underneath, hidden when image loads */}
      {showFallback && (
        <View style={fallbackContainerStyle}>
          {isTextFallback ? <Text style={textStyle}>{fallbackContent}</Text> : fallbackContent}
        </View>
      )}

      {/* Image - loads on top of fallback */}
      {src && (
        <Image
          source={{ uri: src }}
          style={imageStyle}
          onLoad={() => setImageStatus('loaded')}
          onError={() => setImageStatus('error')}
        />
      )}
    </View>
  );
}

export { Avatar, avatarShapes, avatarSizes, getAvatarSize };
export type { AvatarProps, AvatarShape, AvatarSize };
