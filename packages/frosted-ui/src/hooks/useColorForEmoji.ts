import { useMemo } from 'react';
import { getColorForEmoji } from '../helpers/emoji-colors';

/**
 * A React hook that returns the color scale for a given emoji.
 *
 * The color is determined by analyzing the dominant color of the emoji and matching
 * it to the closest color-9 shade in the Frosted UI color palette.
 *
 * @param emoji - The emoji character to get the color for
 * @returns The corresponding color scale name (e.g., 'red', 'blue', 'green')
 *
 * @example
 * ```tsx
 * function EmojiWithColor({ emoji }: { emoji: string }) {
 *   const color = useColorForEmoji(emoji);
 *   return <Badge color={color}>{emoji}</Badge>;
 * }
 *
 * // Usage:
 * <EmojiWithColor emoji="❤️" />  // Returns 'red'
 * <EmojiWithColor emoji="🌎" />  // Returns 'cyan'
 * <EmojiWithColor emoji="🔥" />  // Returns 'orange'
 * ```
 */
export function useColorForEmoji(emoji: string) {
  return useMemo(() => getColorForEmoji(emoji), [emoji]);
}
