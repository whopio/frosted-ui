import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUp20"
      {...props}
    >
      <path
        d="M6.25 17.103v-6.547c0-.169-.137-.306-.306-.306H2.972c-.397 0-.607-.47-.342-.765l6.686-7.47c.365-.408 1.003-.408 1.368 0l6.686 7.47c.264.296.054.765-.342.765h-2.972c-.17 0-.306.137-.306.306v6.547c0 .633-.514 1.147-1.148 1.147H7.397c-.634 0-1.147-.514-1.147-1.147z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUp20.category = 'Arrows';

export default ArrowFatUp20;
