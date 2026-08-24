import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmall16"
      {...props}
    >
      <path
        d="M10.853 8.025c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06L8.766 3.817c-.423-.423-1.11-.423-1.532 0L4.086 6.965c-.293.292-.292.767 0 1.06.293.293.768.293 1.06 0L8 5.173l2.854 2.852zm0 4.25c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06L8.766 8.067c-.423-.423-1.11-.423-1.532 0l-3.148 3.148c-.293.293-.292.767 0 1.06.293.293.768.293 1.06 0L8 9.423l2.854 2.852z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall16.category = 'Arrows';

export default DoubleChevronUpSmall16;
