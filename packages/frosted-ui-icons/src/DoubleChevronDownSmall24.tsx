import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmall24"
      {...props}
    >
      <path
        d="M16.47 11.47c.293-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-4.646 4.647c-.488.488-1.28.488-1.768 0L6.47 12.53c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0L12 15.94l4.47-4.47zm0-4.75c.293-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-4.646 4.647c-.488.488-1.28.488-1.768 0L6.47 7.78c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0L12 11.19l4.47-4.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmall24.category = 'Arrows';

export default DoubleChevronDownSmall24;
