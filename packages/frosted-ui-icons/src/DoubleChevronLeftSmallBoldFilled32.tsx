import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBoldFilled32"
      {...props}
    >
      <path
        d="M17.092 10.471c.585-.587.582-1.537-.005-2.122-.587-.584-1.537-.582-2.122.005L8.88 14.468c-.841.845-.841 2.21 0 3.056l6.085 6.113c.585.587 1.535.59 2.122.005.587-.584.59-1.535.005-2.122l-5.5-5.524 5.5-5.525zm6.223 0c.584-.587.582-1.537-.005-2.122-.587-.584-1.537-.582-2.122.005l-6.085 6.114c-.841.845-.841 2.21 0 3.056l6.085 6.113c.585.587 1.535.59 2.122.005.587-.584.59-1.535.005-2.122l-5.5-5.524 5.5-5.525z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled32.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled32;
