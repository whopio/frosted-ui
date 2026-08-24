import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmall16"
      {...props}
    >
      <path
        d="M7.972 5.144c-.293-.292-.293-.767 0-1.06.293-.293.768-.293 1.06 0L12.18 7.23c.423.423.423 1.11 0 1.533L9.033 11.91c-.293.293-.768.293-1.06 0-.294-.293-.294-.768 0-1.06l2.852-2.853-2.853-2.854zm-4.25 0c-.293-.292-.293-.767 0-1.06.293-.293.768-.293 1.06 0L7.93 7.23c.423.423.423 1.11 0 1.533L4.783 11.91c-.293.293-.768.293-1.06 0-.294-.293-.294-.768 0-1.06l2.852-2.853-2.853-2.854z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall16.category = 'Arrows';

export default DoubleChevronRightSmall16;
