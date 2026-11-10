import * as React from 'react';
import { IconProps } from './types';

export const BoltBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltBold32"
      {...props}
    >
      <path
        d="M15.095 1.617c.79-1.143 2.644-.603 2.644.841v9.336h6.77c1.366 0 2.199 1.502 1.474 2.66l-9.902 15.83c-.808 1.29-2.803.718-2.803-.805v-9.293H7.434c-1.336 0-2.172-1.445-1.507-2.604l9.095-15.849.073-.116zm-7.21 16.569h5.655c.96 0 1.738.777 1.738 1.737v7.872l8.76-14.001h-6.56c-.96 0-1.739-.778-1.739-1.738V4.5L7.886 18.186z"
        fill={color}
      />
    </svg>
  );
};

BoltBold32.category = 'Nature & Weather';

export default BoltBold32;
