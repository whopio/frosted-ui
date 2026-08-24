import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalf12"
      {...props}
    >
      <path
        d="M5.327.136c.432-.181.92-.181 1.353 0l3.349 1.403c.65.273 1.074.91 1.074 1.614v3.59c0 1.623-1.156 2.87-2.181 3.674-1.059.83-2.19 1.351-2.527 1.499-.25.11-.533.11-.784 0-.336-.147-1.467-.67-2.526-1.5C2.06 9.614.902 8.367.902 6.744v-3.59c0-.705.425-1.341 1.075-1.614L5.327.136zm1.425 9.918c.38-.214.823-.487 1.245-.818.947-.742 1.606-1.6 1.606-2.493v-3.59c0-.1-.06-.191-.153-.23L6.752 1.792v8.261zM2.557 2.922c-.093.039-.154.13-.154.23v3.59c0 .892.66 1.751 1.607 2.493.42.33.862.603 1.242.816V1.793l-2.695 1.13z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldHalf12.category = 'Security';

export default ShieldHalf12;
