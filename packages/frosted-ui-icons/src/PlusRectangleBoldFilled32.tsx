import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusRectangleBoldFilled32"
      {...props}
    >
      <path
        d="M21.5 2c4.694 0 8.5 3.806 8.5 8.5v11c0 4.694-3.806 8.5-8.5 8.5h-11C5.806 30 2 26.194 2 21.5v-11C2 5.806 5.806 2 10.5 2h11zM16 7.625c-.76 0-1.375.616-1.375 1.375v5.625H9c-.76 0-1.375.616-1.375 1.375 0 .76.616 1.375 1.375 1.375h5.625V23c0 .76.616 1.375 1.375 1.375.76 0 1.375-.616 1.375-1.375v-5.625H23c.76 0 1.375-.616 1.375-1.375 0-.76-.616-1.375-1.375-1.375h-5.625V9c0-.76-.616-1.375-1.375-1.375z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBoldFilled32.category = 'Interface General';

export default PlusRectangleBoldFilled32;
