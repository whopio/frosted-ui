import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevron24"
      {...props}
    >
      <path
        d="M18.97 15.22c.293-.293.768-.293 1.06 0 .293.292.293.767 0 1.06l-7.5 7.5c-.292.293-.767.293-1.06 0l-7.5-7.5c-.293-.293-.293-.768 0-1.06.293-.293.768-.293 1.06 0L12 22.19l6.97-6.97zM12 0c.199 0 .39.08.53.22l7.5 7.5c.293.292.293.767 0 1.06-.292.293-.767.293-1.06 0L12 1.81 5.03 8.78c-.292.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l7.5-7.5c.14-.14.332-.22.53-.22z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevron24.category = 'Arrows';

export default DoubleChevron24;
