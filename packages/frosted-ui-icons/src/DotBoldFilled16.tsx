import * as React from 'react';
import { IconProps } from './types';

export const DotBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DotBoldFilled16"
      {...props}
    >
      <path d="M4 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill={color} />
    </svg>
  );
};

DotBoldFilled16.category = 'Interface General';

export default DotBoldFilled16;
