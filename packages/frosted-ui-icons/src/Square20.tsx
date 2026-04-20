import * as React from 'react';
import { IconProps } from './types';

export const Square20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <rect x="1.75" y="1.75" width="16.5" height="16.5" rx="4.6" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

Square20.category = 'Interface General';

export default Square20;
