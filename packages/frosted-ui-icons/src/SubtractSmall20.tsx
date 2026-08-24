import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall20"
      {...props}
    >
      <path
        d="M15.25 9.25c.414 0 .75.336.75.75s-.336.75-.75.75H4.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall20.category = 'Interface General';

export default SubtractSmall20;
