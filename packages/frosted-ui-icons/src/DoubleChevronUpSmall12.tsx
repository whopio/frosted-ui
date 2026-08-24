import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmall12"
      {...props}
    >
      <path
        d="M8.07 5.776c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06L6.708 2.293c-.39-.39-1.024-.39-1.414 0L2.87 4.716c-.293.293-.293.767 0 1.06.293.293.768.293 1.06 0L6 3.706l2.07 2.07zm0 4c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06L6.708 6.293c-.39-.39-1.024-.39-1.414 0L2.87 8.716c-.293.293-.293.767 0 1.06.293.293.768.293 1.06 0L6 7.706l2.07 2.07z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall12.category = 'Arrows';

export default DoubleChevronUpSmall12;
