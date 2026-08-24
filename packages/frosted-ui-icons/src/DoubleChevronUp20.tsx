import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUp20"
      {...props}
    >
      <path
        d="M17.72 11.335c.293.293.767.293 1.06 0 .293-.293.294-.768.001-1.06L10.87 2.361c-.48-.48-1.258-.48-1.738 0L1.22 10.274c-.293.293-.293.768 0 1.06.293.294.767.294 1.06 0L10 3.616l7.72 7.72zm0 6.445c.293.293.767.293 1.06 0 .293-.293.293-.767.001-1.06L10.87 8.808c-.48-.48-1.258-.48-1.738 0L1.22 16.72c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0L10 10.06l7.72 7.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp20.category = 'Arrows';

export default DoubleChevronUp20;
