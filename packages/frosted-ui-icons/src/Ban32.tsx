import * as React from 'react';
import { IconProps } from './types';

export const Ban32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M26.0762 5.92379L5.92367 26.0763M30.25 16C30.25 23.8701 23.8701 30.25 16 30.25C8.12994 30.25 1.75 23.8701 1.75 16C1.75 8.12994 8.12994 1.75 16 1.75C23.8701 1.75 30.25 8.12994 30.25 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ban32;
