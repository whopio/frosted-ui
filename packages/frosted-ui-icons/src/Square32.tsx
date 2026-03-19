import * as React from 'react';
import { IconProps } from './types';

export const Square32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <rect x="1.75" y="1.75" width="28.5" height="28.5" rx="7.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

Square32.category = 'Product Icons';

export default Square32;
