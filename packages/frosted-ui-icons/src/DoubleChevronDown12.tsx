import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDown12"
      {...props}
    >
      <path
        d="M9.72 5.57c.292-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-4.073 4.073c-.39.39-1.024.39-1.414 0L1.22 6.63c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0L6 9.288l3.72-3.72zm0-4.35c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L6.707 6.353c-.39.39-1.024.39-1.414 0L1.22 2.28c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L6 4.94l3.72-3.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown12.category = 'Arrows';

export default DoubleChevronDown12;
