/**
 * Example usage of useColorForEmoji hook
 * This file demonstrates how to use the hook with various emojis
 */

import React from 'react';
import { useColorForEmoji } from './useColorForEmoji';

// Example 1: Simple emoji color badge
export function EmojiColorBadge({ emoji }: { emoji: string }) {
  const color = useColorForEmoji(emoji);
  
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '8px',
      padding: '8px 12px',
      borderRadius: '6px',
      background: `var(--${color}-3)`,
      border: `1px solid var(--${color}-6)`,
      color: `var(--${color}-11)`
    }}>
      <span style={{ fontSize: '24px' }}>{emoji}</span>
      <span style={{ fontSize: '14px', fontWeight: 500 }}>{color}</span>
    </div>
  );
}

// Example 2: Emoji list with color-coded backgrounds
export function EmojiList() {
  const emojis = ['❤️', '🌎', '🔥', '🌟', '🍋', '🌱', '🌊', '🍇', '🌸', '☁️'];
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {emojis.map((emoji, i) => (
        <EmojiColorBadge key={i} emoji={emoji} />
      ))}
    </div>
  );
}

// Example 3: Emoji avatar with color border
export function EmojiAvatar({ emoji, name }: { emoji: string; name: string }) {
  const color = useColorForEmoji(emoji);
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '8px' 
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        background: `var(--${color}-2)`,
        border: `3px solid var(--${color}-7)`
      }}>
        {emoji}
      </div>
      <span style={{ fontSize: '12px', color: 'var(--gray-11)' }}>{name}</span>
    </div>
  );
}

// Example 4: Using the hook to dynamically style components
export function EmojiCard({ emoji, title, description }: { 
  emoji: string; 
  title: string; 
  description: string;
}) {
  const color = useColorForEmoji(emoji);
  
  return (
    <div style={{
      padding: '16px',
      borderRadius: '8px',
      background: `var(--${color}-2)`,
      border: `1px solid var(--${color}-6)`,
    }}>
      <div style={{ 
        fontSize: '40px', 
        marginBottom: '12px' 
      }}>
        {emoji}
      </div>
      <h3 style={{ 
        margin: '0 0 8px 0', 
        color: `var(--${color}-11)`,
        fontSize: '18px',
        fontWeight: 600
      }}>
        {title}
      </h3>
      <p style={{ 
        margin: 0, 
        color: 'var(--gray-11)',
        fontSize: '14px',
        lineHeight: 1.5
      }}>
        {description}
      </p>
    </div>
  );
}

// Example usage:
// <EmojiColorBadge emoji="🔥" />
// <EmojiList />
// <EmojiAvatar emoji="🚀" name="Rocket" />
// <EmojiCard 
//   emoji="💡" 
//   title="Great Idea" 
//   description="This is a fantastic suggestion!"
// />

