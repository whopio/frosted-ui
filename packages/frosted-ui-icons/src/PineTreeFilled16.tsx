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
        d="M7.33.277c.37-.367.971-.367 1.34 0l.075.084L13.58 6.46c.494.622.05 1.54-.745 1.54h-1.358l3.057 4.518c.426.631-.026 1.483-.787 1.483H8.75v1.249c0 .414-.336.75-.75.75-.415 0-.75-.336-.75-.75v-1.25H2.253c-.762 0-1.214-.85-.788-1.482L4.522 8H3.165c-.795 0-1.238-.918-.744-1.54L7.255.36l.076-.084z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled16.category = 'Nature & Weather';

export default PineTreeFilled16;
