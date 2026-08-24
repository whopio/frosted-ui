import * as React from 'react';
import { IconProps } from './types';

export const GridBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GridBoldFilled32"
      {...props}
    >
      <path
        d="M11.25 17c2.071 0 3.75 1.679 3.75 3.75v6.5c0 2.071-1.679 3.75-3.75 3.75h-6.5C2.679 31 1 29.321 1 27.25v-6.5C1 18.679 2.679 17 4.75 17h6.5zm16 0c2.071 0 3.75 1.679 3.75 3.75v6.5c0 2.071-1.679 3.75-3.75 3.75h-6.5C18.679 31 17 29.321 17 27.25v-6.5c0-2.071 1.679-3.75 3.75-3.75h6.5zm-16-16C13.321 1 15 2.679 15 4.75v6.5c0 2.071-1.679 3.75-3.75 3.75h-6.5C2.679 15 1 13.321 1 11.25v-6.5C1 2.679 2.679 1 4.75 1h6.5zm16 0C29.321 1 31 2.679 31 4.75v6.5c0 2.071-1.679 3.75-3.75 3.75h-6.5C18.679 15 17 13.321 17 11.25v-6.5C17 2.679 18.679 1 20.75 1h6.5z"
        fill={color}
      />
    </svg>
  );
};

GridBoldFilled32.category = 'Interface General';

export default GridBoldFilled32;
