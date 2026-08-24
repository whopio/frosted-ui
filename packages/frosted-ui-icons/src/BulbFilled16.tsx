import * as React from 'react';
import { IconProps } from './types';

export const BulbFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BulbFilled16"
      {...props}
    >
      <path
        d="M10 13.5c.414 0 .75.336.75.75s-.336.75-.75.75H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4zM8 1c2.9 0 5.25 2.35 5.25 5.25 0 1.703-.812 3.214-2.065 4.172-.14.107-.185.226-.185.3v.028c0 .966-.784 1.75-1.75 1.75h-2.5c-.966 0-1.75-.784-1.75-1.75v-.028c0-.074-.044-.193-.185-.3C3.562 9.464 2.75 7.952 2.75 6.25 2.75 3.35 5.1 1 8 1zM6.75 6c-.414 0-.75.336-.75.75s.336.75.75.75h.5V9c0 .414.336.75.75.75s.75-.336.75-.75V7.5h.5c.414 0 .75-.336.75-.75S9.664 6 9.25 6h-2.5z"
        fill={color}
      />
    </svg>
  );
};

BulbFilled16.category = 'Objects';

export default BulbFilled16;
