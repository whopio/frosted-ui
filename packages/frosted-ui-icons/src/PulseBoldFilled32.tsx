import * as React from 'react';
import { IconProps } from './types';

export const PulseBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBoldFilled32"
      {...props}
    >
      <path
        d="M29.5 10.35L19.078 20.772c-.255.256-.67.256-.925 0l-6.927-6.927c-.255-.255-.67-.255-.925 0L2.5 21.646"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBoldFilled32.category = 'Stats & Charts';

export default PulseBoldFilled32;
