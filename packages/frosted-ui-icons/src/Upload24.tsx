import * as React from 'react';
import { IconProps } from './types';

export const Upload24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Upload24"
      {...props}
    >
      <path
        d="M22.25 21.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h20.5zM11.526 1.168c.295-.24.73-.223 1.004.052l7.5 7.5c.293.292.293.767 0 1.06-.293.293-.767.293-1.06 0l-6.22-6.22V18.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56L5.03 9.78c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06l7.5-7.5.056-.052z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Upload24.category = 'Arrows';

export default Upload24;
