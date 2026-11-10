import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTreeFilled16"
      {...props}
    >
      <path
        d="M7.33.277c.368-.367.97-.367 1.339 0l.075.084 4.836 6.098c.494.622.05 1.54-.744 1.54h-1.359l3.057 4.518c.427.631-.025 1.483-.787 1.483H8.751v1.249c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25h-5c-.76 0-1.213-.851-.786-1.482L4.52 8H3.164c-.794 0-1.238-.918-.744-1.54L7.255.36 7.33.277z"
        fill={color}
      />
    </svg>
  );
};

PineTreeFilled16.category = 'Nature & Weather';

export default PineTreeFilled16;
