import * as React from 'react';
import { IconProps } from './types';

export const Stats32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Stats32"
      {...props}
    >
      <path
        d="M3 3.25c.414 0 .75.336.75.75v21c0 1.243 1.007 2.25 2.25 2.25h23c.414 0 .75.336.75.75s-.336.75-.75.75H6c-2.071 0-3.75-1.679-3.75-3.75V4c0-.414.336-.75.75-.75zM27.25 8c.414 0 .75.336.75.75v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.69l-7.22 7.22c-.293.293-.767.293-1.06 0l-3.97-3.97-5.97 5.97c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l6.5-6.5.056-.052c.295-.24.73-.223 1.004.052l3.97 3.97 6.69-6.69h-2.69c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5z"
        fill={color}
      />
    </svg>
  );
};

Stats32.category = 'Stats & Charts';

export default Stats32;
