import * as React from 'react';
import { IconProps } from './types';

export const BankBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BankBoldFilled16"
      {...props}
    >
      <path
        d="M14.523 13.501c.815 0 1.477.662 1.477 1.478 0 .564-.458 1.022-1.023 1.022H1.022c-.529 0-.965-.402-1.017-.918L0 14.979l.008-.152c.076-.745.705-1.326 1.47-1.326h13.045zM3.25 7.001c.414 0 .75.336.75.75v4c0 .414-.336.75-.75.75h-1.5c-.414 0-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75h1.5zm5.5 0c.414 0 .75.336.75.75v4c0 .414-.336.75-.75.75h-1.5c-.414 0-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75h1.5zm5.5 0c.414 0 .75.336.75.75v4c0 .414-.336.75-.75.75h-1.5c-.414 0-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75h1.5zM6.695.298C7.52-.1 8.481-.1 9.305.298l5.706 2.755c.605.292.989.904.989 1.576v.289c0 .598-.485 1.083-1.083 1.083H1.083C.485 6.001 0 5.516 0 4.918v-.29c0-.67.384-1.283.99-1.575L6.694.298z"
        fill={color}
      />
    </svg>
  );
};

BankBoldFilled16.category = 'Buildings';

export default BankBoldFilled16;
