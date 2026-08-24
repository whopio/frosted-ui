import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBoldFilled32"
      {...props}
    >
      <path
        d="M13.001 26.75L2.251 16l10.75-10.75M2.251 16h27.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBoldFilled32.category = 'Arrows';

export default ArrowLeftBoldFilled32;
