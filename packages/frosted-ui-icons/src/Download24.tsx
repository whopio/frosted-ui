import * as React from 'react';
import { IconProps } from './types';

export const Download24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Download24"
      {...props}
    >
      <path
        d="M22.25 21.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h20.5zM12 1c.414 0 .75.336.75.75v15.44l6.22-6.22c.293-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-7.5 7.5c-.274.275-.71.292-1.004.052l-.056-.052-7.5-7.5c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0l6.22 6.22V1.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Download24.category = 'Arrows';

export default Download24;
