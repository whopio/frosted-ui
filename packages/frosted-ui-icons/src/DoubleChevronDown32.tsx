import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDown32"
      {...props}
    >
      <path
        d="M29.72 12.309c.293-.293.768-.293 1.06 0 .293.292.293.767 0 1.06L17.12 27.035c-.617.617-1.619.617-2.236 0L1.222 13.37c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0l13.663 13.665c.031.032.082.032.113 0L29.72 12.31zm0-7.59c.293-.292.768-.292 1.06 0 .293.293.293.768 0 1.061L17.12 19.446c-.618.617-1.619.617-2.236 0L1.222 5.78c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0l13.663 13.666c.031.03.082.03.113 0L29.72 4.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown32.category = 'Arrows';

export default DoubleChevronDown32;
