import * as React from 'react';
import { IconProps } from './types';

export const Upload16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Upload16"
      {...props}
    >
      <path
        d="M14.25 13.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.5zM7.526 1.168c.295-.24.73-.223 1.004.052l4.5 4.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8.75 3.56v7.69c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56L4.03 6.78c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l4.5-4.5.056-.052z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Upload16.category = 'Arrows';

export default Upload16;
