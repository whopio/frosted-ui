import * as React from 'react';
import { IconProps } from './types';

export const Compress24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Compress24"
      {...props}
    >
      <path
        d="M11.47 13.97c.293-.293.767-.293 1.06 0l3.5 3.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-2.22-2.22v5.815c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.814l-2.22 2.22c-.293.292-.767.292-1.06 0-.293-.294-.293-.768 0-1.061l3.5-3.5zm8.78-2.72c.414 0 .75.336.75.75s-.336.75-.75.75H3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16.5zM12 1.125c.414 0 .75.336.75.75v5.814l2.22-2.22c.293-.292.767-.292 1.06 0 .293.294.293.768 0 1.061l-3.5 3.5c-.293.293-.767.293-1.06 0l-3.5-3.5c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l2.22 2.22V1.874c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Compress24.category = 'Arrows';

export default Compress24;
