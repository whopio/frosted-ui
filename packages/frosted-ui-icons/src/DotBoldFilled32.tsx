import * as React from 'react';
import { IconProps } from './types';

export const DotBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DotBoldFilled32"
      {...props}
    >
      <path d="M7 16c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" fill={color} />
    </svg>
  );
};

DotBoldFilled32.category = 'Interface General';

export default DotBoldFilled32;
