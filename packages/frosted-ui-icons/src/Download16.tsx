import * as React from 'react';
import { IconProps } from './types';

export const Download16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Download16"
      {...props}
    >
      <path
        d="M14.25 13.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.5zM8 1c.414 0 .75.336.75.75v7.69l3.22-3.22c.293-.293.767-.293 1.06 0 .293.293.293.768 0 1.06l-4.5 4.5c-.274.275-.71.292-1.004.052l-.056-.052-4.5-4.5c-.293-.292-.293-.767 0-1.06.293-.293.767-.293 1.06 0l3.22 3.22V1.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Download16.category = 'Arrows';

export default Download16;
