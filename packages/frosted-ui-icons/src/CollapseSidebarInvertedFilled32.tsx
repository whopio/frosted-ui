import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInvertedFilled32"
      {...props}
    >
      <path
        d="M24.25 2.5C27.978 2.5 31 5.522 31 9.25v13.5c0 3.728-3.022 6.75-6.75 6.75H7.75C4.022 29.5 1 26.478 1 22.75V9.25C1 5.522 4.022 2.5 7.75 2.5h16.5zM7.5 4.5C5.015 4.5 3 6.515 3 9v14c0 2.485 2.015 4.5 4.5 4.5H11c1.105 0 2-.895 2-2v-19c0-1.105-.895-2-2-2H7.5z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedFilled32.category = 'Layout';

export default CollapseSidebarInvertedFilled32;
