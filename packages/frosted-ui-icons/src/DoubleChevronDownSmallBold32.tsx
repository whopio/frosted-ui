import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBold32"
      {...props}
    >
      <path
        d="M21.878 15.041c.392-.39 1.025-.388 1.415.003.389.391.388 1.025-.003 1.415l-6.114 6.088c-.65.647-1.701.647-2.351 0L8.71 16.459c-.39-.39-.392-1.024-.002-1.415s1.023-.393 1.415-.003L16 20.895l5.878-5.854zm0-5.75c.392-.39 1.025-.388 1.415.003.389.391.388 1.025-.003 1.415l-6.114 6.088c-.65.647-1.701.647-2.351 0L8.71 10.709c-.39-.39-.392-1.024-.002-1.415s1.023-.393 1.415-.003L16 15.145l5.878-5.854z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownSmallBold32.category = 'Arrows';

export default DoubleChevronDownSmallBold32;
