import * as React from 'react';
import { IconProps } from './types';

export const GridFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GridFilled16"
      {...props}
    >
      <path
        d="M4.958 8.544c1.38 0 2.5 1.12 2.5 2.5v1.458c0 1.38-1.12 2.5-2.5 2.5H3.5c-1.38 0-2.5-1.12-2.5-2.5v-1.458c0-1.38 1.12-2.5 2.5-2.5h1.458zm7.544 0c1.38 0 2.5 1.12 2.5 2.5v1.458c0 1.38-1.12 2.5-2.5 2.5h-1.458c-1.38 0-2.5-1.12-2.5-2.5v-1.458c0-1.38 1.12-2.5 2.5-2.5h1.458zM4.958 1c1.38 0 2.5 1.12 2.5 2.5v1.458c0 1.38-1.12 2.5-2.5 2.5H3.5c-1.38 0-2.5-1.12-2.5-2.5V3.5C1 2.12 2.12 1 3.5 1h1.458zm7.544 0c1.38 0 2.5 1.12 2.5 2.5v1.458c0 1.38-1.12 2.5-2.5 2.5h-1.458c-1.38 0-2.5-1.12-2.5-2.5V3.5c0-1.38 1.12-2.5 2.5-2.5h1.458z"
        fill={color}
      />
    </svg>
  );
};

GridFilled16.category = 'Interface General';

export default GridFilled16;
