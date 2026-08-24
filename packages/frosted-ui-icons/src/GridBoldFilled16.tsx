import * as React from 'react';
import { IconProps } from './types';

export const GridBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GridBoldFilled16"
      {...props}
    >
      <path
        d="M4.75 9.001c1.243 0 2.25 1.007 2.25 2.25v1.5c0 1.242-1.007 2.25-2.25 2.25h-1.5c-1.243 0-2.25-1.008-2.25-2.25v-1.5c0-1.243 1.007-2.25 2.25-2.25h1.5zm8.001 0c1.242 0 2.25 1.008 2.25 2.25v1.5c0 1.242-1.008 2.25-2.25 2.25h-1.5c-1.243 0-2.25-1.008-2.25-2.25v-1.5c0-1.243 1.007-2.25 2.25-2.25h1.5zM4.75 1C5.993 1 7 2.007 7 3.25v1.5C7 5.993 5.993 7 4.75 7h-1.5C2.007 7 1 5.993 1 4.75v-1.5C1 2.007 2.007 1 3.25 1h1.5zm8.001 0c1.242 0 2.25 1.008 2.25 2.25v1.5c0 1.242-1.008 2.25-2.25 2.25h-1.5c-1.243 0-2.25-1.007-2.25-2.25v-1.5c0-1.243 1.007-2.25 2.25-2.25h1.5z"
        fill={color}
      />
    </svg>
  );
};

GridBoldFilled16.category = 'Interface General';

export default GridBoldFilled16;
