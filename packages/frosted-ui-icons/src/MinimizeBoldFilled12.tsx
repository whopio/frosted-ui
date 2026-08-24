import * as React from 'react';
import { IconProps } from './types';

export const MinimizeBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeBoldFilled12"
      {...props}
    >
      <path
        d="M4.75 6C5.44 6 6 6.56 6 7.25v3.5C6 11.44 5.44 12 4.75 12s-1.25-.56-1.25-1.25v-.482l-1.366 1.366c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L1.732 8.5H1.25C.56 8.5 0 7.94 0 7.25S.56 6 1.25 6h3.5zM9.866.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L10.268 3.5h.482c.69 0 1.25.56 1.25 1.25S11.44 6 10.75 6h-3.5C6.56 6 6 5.44 6 4.75v-3.5C6 .56 6.56 0 7.25 0S8.5.56 8.5 1.25v.482L9.866.366z"
        fill={color}
      />
    </svg>
  );
};

MinimizeBoldFilled12.category = 'Arrows';

export default MinimizeBoldFilled12;
