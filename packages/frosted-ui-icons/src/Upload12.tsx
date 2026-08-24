import * as React from 'react';
import { IconProps } from './types';

export const Upload12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Upload12"
      {...props}
    >
      <path
        d="M11.25 10.5c.414 0 .75.336.75.75s-.336.75-.75.75H.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5zM5.526.168c.295-.24.73-.223 1.004.052l3.25 3.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L6.75 2.56V8c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.56L3.28 4.53c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L5.47.22l.056-.052z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Upload12.category = 'Arrows';

export default Upload12;
