import * as React from 'react';
import { IconProps } from './types';

export const MinimizeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinimizeFilled32"
      {...props}
    >
      <path
        d="M13.75 17c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-8.483l-9.366 9.366c-.488.489-1.28.489-1.768 0-.488-.488-.488-1.28 0-1.767l9.366-9.366H2.25c-.69 0-1.25-.56-1.25-1.25S1.56 17 2.25 17h11.5zM28.866 1.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.767L21.268 12.5h8.482c.69 0 1.25.56 1.25 1.25S30.44 15 29.75 15h-11.5c-.69 0-1.25-.56-1.25-1.25V2.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v8.482l9.366-9.366z"
        fill={color}
      />
    </svg>
  );
};

MinimizeFilled32.category = 'Arrows';

export default MinimizeFilled32;
