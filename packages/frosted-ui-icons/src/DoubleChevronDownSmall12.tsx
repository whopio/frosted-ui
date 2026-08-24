import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmall12"
      {...props}
    >
      <path
        d="M8.07 6.22c.293-.293.768-.293 1.06 0 .293.292.293.767 0 1.06L6.708 9.703c-.39.39-1.024.39-1.414 0L2.87 7.28c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0L6 8.289l2.07-2.07zm0-4c.293-.293.768-.293 1.06 0 .293.292.293.767 0 1.06L6.708 5.703c-.39.39-1.024.39-1.414 0L2.87 3.28c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0L6 4.289l2.07-2.07z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall12.category = 'Arrows';

export default DoubleChevronDownSmall12;
