import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeft12"
      {...props}
    >
      <path
        d="M2.47 6.22c.293-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-.97.97h8.69c.414 0 .75.336.75.75s-.336.75-.75.75H2.56l.97.97c.293.292.293.767 0 1.06-.293.293-.767.293-1.06 0L.22 9.53c-.293-.293-.293-.768 0-1.06l2.25-2.25zm6-6c.293-.292.767-.293 1.06 0l2.25 2.25c.293.293.293.768 0 1.06L9.53 5.78c-.293.294-.767.294-1.06 0-.293-.292-.293-.767 0-1.06l.97-.97H.75C.336 3.75 0 3.416 0 3c0-.414.336-.75.75-.75h8.69l-.97-.97c-.293-.292-.293-.767 0-1.06z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeft12.category = 'Arrows';

export default DoubleArrowRightLeft12;
