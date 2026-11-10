import * as React from 'react';
import { IconProps } from './types';

export const LightningBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningBoldFilled32"
      {...props}
    >
      <path
        d="M21.346.998c1.117 0 1.858 1.158 1.39 2.172l-3.755 8.15h5.93c1.295 0 2.005 1.507 1.18 2.505l-13.787 16.7c-.847 1.025-2.504.261-2.275-1.048l1.973-11.243H7.083c-1.031 0-1.768-.999-1.463-1.984L9.93 2.325c.245-.789.975-1.327 1.801-1.327h9.615z"
        fill={color}
      />
    </svg>
  );
};

LightningBoldFilled32.category = 'Nature & Weather';

export default LightningBoldFilled32;
