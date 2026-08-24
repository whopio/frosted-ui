import * as React from 'react';
import { IconProps } from './types';

export const ShieldCrossFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCrossFilled12"
      {...props}
    >
      <path
        d="M5.326.136c.433-.181.92-.181 1.353 0l3.35 1.403c.65.273 1.073.91 1.073 1.614v3.59c0 1.623-1.156 2.87-2.181 3.674-1.059.83-2.19 1.351-2.527 1.499-.25.11-.532.11-.784 0-.336-.147-1.467-.67-2.526-1.5C2.059 9.614.902 8.367.902 6.744v-3.59c0-.705.424-1.341 1.075-1.614L5.327.136zm2.705 3.646c-.293-.293-.768-.293-1.06 0l-.97.97-.97-.97c-.293-.293-.768-.293-1.06 0-.293.293-.293.768 0 1.06l.97.97-.97.97c-.293.293-.293.768 0 1.06.292.293.767.293 1.06 0l.97-.969.97.97c.292.292.767.292 1.06 0 .293-.293.293-.768 0-1.06l-.97-.97.97-.97c.293-.293.293-.768 0-1.06z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldCrossFilled12.category = 'Security';

export default ShieldCrossFilled12;
