import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDown20"
      {...props}
    >
      <path
        d="M17.72 8.667c.293-.292.767-.292 1.06 0 .293.293.294.768.001 1.06L10.87 17.64c-.48.48-1.258.48-1.738 0L1.22 9.728c-.293-.293-.293-.768 0-1.06.293-.294.767-.294 1.06 0L10 16.386l7.72-7.72zm0-6.445c.293-.293.767-.293 1.06 0 .293.293.293.768.001 1.06l-7.912 7.913c-.48.48-1.258.48-1.738 0L1.22 3.283c-.293-.293-.293-.768 0-1.061.293-.293.767-.293 1.06 0L10 9.942l7.72-7.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown20.category = 'Arrows';

export default DoubleChevronDown20;
