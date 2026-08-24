import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningFilled32"
      {...props}
    >
      <path
        d="M21.23 1c.94 0 1.565.975 1.172 1.83L18.41 11.5h6.445c1.09 0 1.688 1.27.994 2.11L11.834 30.6c-.686.832-2.03.213-1.844-.849L12.05 18H6.732c-.868 0-1.489-.841-1.232-1.67L9.882 2.161c.213-.69.853-1.162 1.576-1.162h9.772z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

LightningFilled32.category = 'Nature & Weather';

export default LightningFilled32;
