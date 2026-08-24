import * as React from 'react';
import { IconProps } from './types';

export const GridBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GridBoldFilled24"
      {...props}
    >
      <path
        d="M7.75 13.002c1.795 0 3.25 1.455 3.25 3.25v3.5c0 1.795-1.455 3.25-3.25 3.25h-3.5c-1.795 0-3.25-1.455-3.25-3.25v-3.5c0-1.795 1.455-3.25 3.25-3.25h3.5zm12.002 0c1.795 0 3.25 1.455 3.25 3.25v3.5c0 1.795-1.455 3.25-3.25 3.25h-3.5c-1.795 0-3.25-1.455-3.25-3.25v-3.5c0-1.795 1.455-3.25 3.25-3.25h3.5zM7.75 1C9.545 1 11 2.455 11 4.25v3.5C11 9.545 9.545 11 7.75 11h-3.5C2.455 11 1 9.545 1 7.75v-3.5C1 2.455 2.455 1 4.25 1h3.5zm12.002 0c1.795 0 3.25 1.455 3.25 3.25v3.5c0 1.795-1.455 3.25-3.25 3.25h-3.5c-1.795 0-3.25-1.455-3.25-3.25v-3.5c0-1.795 1.455-3.25 3.25-3.25h3.5z"
        fill={color}
      />
    </svg>
  );
};

GridBoldFilled24.category = 'Interface General';

export default GridBoldFilled24;
