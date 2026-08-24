import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevron12"
      {...props}
    >
      <path
        d="M8.47 7.72c.293-.293.768-.293 1.06 0 .293.292.293.767 0 1.06l-3 3c-.292.293-.767.293-1.06 0l-3-3c-.293-.293-.293-.767 0-1.06.293-.293.768-.293 1.06 0L6 10.19l2.47-2.47zm-3-7.5c.293-.293.768-.293 1.06 0l3 3c.293.293.293.767 0 1.06-.292.293-.767.293-1.06 0L6 1.81 3.53 4.28c-.292.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l3-3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevron12.category = 'Arrows';

export default DoubleChevron12;
