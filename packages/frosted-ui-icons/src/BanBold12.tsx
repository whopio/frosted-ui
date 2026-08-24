import * as React from 'react';
import { IconProps } from './types';

export const BanBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zM3.968 9.445C4.563 9.797 5.258 10 6 10c2.21 0 4-1.79 4-4 0-.742-.203-1.437-.555-2.032L3.968 9.445zM6 2C3.79 2 2 3.79 2 6c0 .742.202 1.436.554 2.031L8.03 2.554C7.436 2.202 6.741 2 6 2z"
        fill={color}
      />
    </svg>
  );
};

BanBold12.category = 'Interface General';

export default BanBold12;
