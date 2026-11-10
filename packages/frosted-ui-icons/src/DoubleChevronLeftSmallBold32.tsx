import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBold32"
      {...props}
    >
      <path
        d="M16.975 10.14c.39-.392.388-1.025-.003-1.415-.391-.39-1.025-.388-1.415.003L9.47 14.842c-.647.65-.647 1.701 0 2.351l6.088 6.113c.39.392 1.024.393 1.415.003s.393-1.023.003-1.415l-5.853-5.877 5.853-5.878zm5.75 0c.39-.392.388-1.025-.003-1.415-.391-.39-1.025-.388-1.415.003l-6.088 6.114c-.647.65-.647 1.701 0 2.351l6.088 6.113c.39.392 1.024.393 1.415.003s.393-1.023.003-1.415l-5.853-5.877 5.853-5.878z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold32.category = 'Arrows';

export default DoubleChevronLeftSmallBold32;
