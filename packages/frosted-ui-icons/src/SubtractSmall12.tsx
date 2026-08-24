import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall12"
      {...props}
    >
      <path
        d="M9.25 5.25c.414 0 .75.336.75.75s-.336.75-.75.75h-6.5C2.336 6.75 2 6.414 2 6s.336-.75.75-.75h6.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall12.category = 'Interface General';

export default SubtractSmall12;
