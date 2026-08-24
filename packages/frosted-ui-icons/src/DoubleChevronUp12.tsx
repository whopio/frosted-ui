import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUp12"
      {...props}
    >
      <path
        d="M9.72 6.427c.292.292.767.292 1.06 0 .293-.293.293-.768 0-1.061L6.707 1.293c-.39-.39-1.024-.39-1.414 0L1.22 5.366c-.293.293-.293.768 0 1.06.293.293.767.293 1.06 0L6 2.707l3.72 3.72zm0 4.35c.293.292.767.292 1.06 0 .293-.294.293-.768 0-1.061L6.707 5.642c-.39-.39-1.024-.39-1.414 0L1.22 9.716c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0L6 7.056l3.72 3.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp12.category = 'Arrows';

export default DoubleChevronUp12;
