import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftBoldFilled32"
      {...props}
    >
      <path
        d="M21.25 3.5L9.224 15.526c-.262.262-.262.686 0 .948L21.25 28.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled32.category = 'Arrows';

export default ChevronLeftBoldFilled32;
