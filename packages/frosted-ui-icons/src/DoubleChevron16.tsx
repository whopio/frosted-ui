import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevron16"
      {...props}
    >
      <path
        d="M11.97 10.22c.292-.293.767-.293 1.06 0 .293.293.293.768 0 1.06l-4.5 4.5c-.293.293-.768.293-1.06 0l-4.5-4.5c-.293-.292-.293-.767 0-1.06.292-.293.767-.293 1.06 0L8 14.19l3.97-3.97zm-4.5-10c.293-.293.767-.293 1.06 0l4.5 4.5c.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0L8 1.81 4.03 5.78c-.293.293-.768.293-1.06 0-.293-.292-.293-.767 0-1.06l4.5-4.5z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevron16.category = 'Arrows';

export default DoubleChevron16;
