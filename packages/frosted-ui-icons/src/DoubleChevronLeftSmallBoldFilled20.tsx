import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBoldFilled20"
      {...props}
    >
      <path
        d="M10.307 6.894c.586-.586.585-1.536 0-2.122-.586-.585-1.535-.585-2.121 0L4.312 8.644c-.75.748-.75 1.963 0 2.711l3.874 3.872c.586.585 1.535.585 2.12 0 .586-.586.587-1.536 0-2.122L7.2 10l3.108-3.106zm5.503 0c.585-.586.585-1.536 0-2.122-.586-.585-1.535-.585-2.121 0L9.815 8.644c-.75.748-.75 1.963 0 2.711l3.874 3.872c.586.585 1.535.585 2.12 0 .586-.586.586-1.536 0-2.122L12.703 10l3.108-3.106z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled20;
