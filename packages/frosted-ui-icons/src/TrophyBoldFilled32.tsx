import * as React from 'react';
import { IconProps } from './types';

export const TrophyBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrophyBoldFilled32"
      {...props}
    >
      <path
        d="M22.204 1C24.3 1 26 2.7 26 4.796V5h2c1.657 0 3 1.343 3 3v2.5c0 3.058-2.288 5.58-5.246 5.95-.932 4.148-4.438 7.32-8.754 7.75V29h4.25c.552 0 1 .448 1 1s-.448 1-1 1h-10.5c-.552 0-1-.448-1-1s.448-1 1-1H15v-4.8c-4.316-.43-7.823-3.602-8.755-7.75C3.288 16.08 1 13.558 1 10.5V8c0-1.657 1.343-3 3-3h2v-.204C6 2.7 7.7 1 9.796 1h12.408zM4 7c-.552 0-1 .448-1 1v2.5c0 1.865 1.276 3.43 3.003 3.874L6 14.25V7H4zm22 7.25c0 .041-.003.083-.004.124C27.723 13.931 29 12.365 29 10.5V8c0-.552-.448-1-1-1h-2v7.25z"
        fill={color}
      />
    </svg>
  );
};

TrophyBoldFilled32.category = 'Objects';

export default TrophyBoldFilled32;
