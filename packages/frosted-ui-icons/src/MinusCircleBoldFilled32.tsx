import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleBoldFilled32"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM9.75 15C9.19771 15 8.75 15.4477 8.75 16C8.75001 16.5523 9.19772 17 9.75 17H22.25C22.8023 17 23.25 16.5523 23.25 16C23.25 15.4477 22.8023 15 22.25 15H9.75Z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBoldFilled32.category = 'Interface General';

export default MinusCircleBoldFilled32;
