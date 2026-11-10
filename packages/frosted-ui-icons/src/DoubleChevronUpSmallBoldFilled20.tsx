import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBoldFilled20"
      {...props}
    >
      <path
        d="M13.106 10.307c.586.585 1.536.585 2.121 0 .586-.586.586-1.536 0-2.121l-3.87-3.874c-.75-.75-1.964-.75-2.712 0L4.773 8.186c-.585.585-.585 1.535 0 2.12.586.586 1.536.586 2.122 0L10 7.2l3.106 3.108zm0 5.503c.586.585 1.536.585 2.121 0 .586-.586.586-1.536 0-2.122l-3.87-3.874c-.75-.748-1.964-.748-2.712 0l-3.872 3.874c-.585.586-.585 1.536 0 2.122.586.585 1.536.585 2.122 0L10 12.702l3.106 3.108z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled20;
