import * as React from 'react';
import { IconProps } from './types';

export const Square16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <rect x="1.75" y="1.75" width="12.5" height="12.5" rx="3.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

Square16.category = 'Interface General';

export default Square16;
