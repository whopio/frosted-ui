import * as React from 'react';
import { IconProps } from './types';

export const PulseBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold32"
      {...props}
    >
      <path
        d="M30 10.141L19.192 20.95c-.265.265-.694.265-.96 0l-7.183-7.183c-.265-.265-.694-.265-.96 0L2 21.856"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBold32.category = 'Stats & Charts';

export default PulseBold32;
