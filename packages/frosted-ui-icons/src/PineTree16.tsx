import * as React from 'react';
import { IconProps } from './types';

export const PineTree16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTree16"
      {...props}
    >
      <path
        d="M7.331.277c.369-.367.97-.367 1.339 0l.075.084 4.836 6.098c.494.622.05 1.54-.744 1.54h-1.358l3.056 4.518c.427.631-.025 1.483-.787 1.483H8.751v1.249c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H2.253c-.762 0-1.214-.85-.787-1.482L4.522 8H3.165c-.795 0-1.238-.918-.744-1.54L7.256.36 7.33.277zM4.303 6.5H5.56c.76 0 1.212.851.786 1.482L3.289 12.5h9.423L9.655 7.982c-.426-.63.025-1.482.786-1.482H11.7L8 1.837 4.303 6.5z"
        fill={color}
      />
    </svg>
  );
};

PineTree16.category = 'Nature & Weather';

export default PineTree16;
