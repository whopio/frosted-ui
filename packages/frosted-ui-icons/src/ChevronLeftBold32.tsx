import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftBold32"
      {...props}
    >
      <path
        d="M21.75 3L9.224 15.526c-.262.262-.262.686 0 .948L21.75 29"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBold32.category = 'Arrows';

export default ChevronLeftBold32;
