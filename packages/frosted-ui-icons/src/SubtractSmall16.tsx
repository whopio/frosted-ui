import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall16"
      {...props}
    >
      <path
        d="M12.25 7.25c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5C3.336 8.75 3 8.414 3 8s.336-.75.75-.75h8.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall16.category = 'Interface General';

export default SubtractSmall16;
