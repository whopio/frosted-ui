import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBoldFilled32"
      {...props}
    >
      <path
        d="M21.525 14.903c.587-.584 1.537-.582 2.122.005.584.587.582 1.538-.005 2.122l-6.113 6.085c-.846.842-2.212.842-3.057 0L8.359 17.03c-.587-.584-.59-1.535-.005-2.122.584-.587 1.535-.589 2.122-.005l5.524 5.5 5.525-5.5zm0-6.222c.587-.585 1.537-.582 2.122.005.584.587.582 1.537-.005 2.122l-6.113 6.085c-.846.841-2.212.841-3.057 0l-6.113-6.085c-.587-.585-.59-1.535-.005-2.122.584-.587 1.535-.59 2.122-.005L16 14.18l5.525-5.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled32.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled32;
