import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDown32"
      {...props}
    >
      <path
        d="M17.22 24.53c-.293-.294-.293-.768 0-1.061.293-.293.767-.293 1.06 0l4.97 4.968V1.748c0-.414.336-.75.75-.75s.75.336.75.75v26.69l4.969-4.97c.293-.292.767-.292 1.06 0 .293.294.293.768 0 1.061l-6.249 6.25c-.293.292-.768.292-1.06 0l-6.25-6.25zm-16-16.003c-.293-.293-.293-.767 0-1.06l6.25-6.25c.293-.292.767-.292 1.06 0l6.25 6.25c.292.293.292.767 0 1.06-.294.293-.768.293-1.061 0L8.749 3.56v26.689c0 .414-.335.75-.75.75-.413 0-.75-.336-.75-.75V3.558L2.28 8.529c-.293.292-.767.292-1.06 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDown32.category = 'Arrows';

export default DoubleArrowUpDown32;
