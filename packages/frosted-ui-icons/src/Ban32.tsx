import * as React from 'react';
import { IconProps } from './types';

export const Ban32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM6.64453 26.415C9.12404 28.6438 12.4036 30 16 30C23.732 30 30 23.732 30 16C30 12.4036 28.6438 9.12404 26.415 6.64453L6.64453 26.415ZM16 2C8.26801 2 2 8.26801 2 16C2 19.5959 3.3558 22.8751 5.58398 25.3545L25.3545 5.58398C22.8751 3.3558 19.5959 2 16 2Z"
        fill={color}
      />
    </svg>
  );
};

Ban32.category = 'Interface General';

export default Ban32;
