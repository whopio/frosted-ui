import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInverted32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInverted32"
      {...props}
    >
      <path
        d="M24.25 3C27.978 3 31 6.022 31 9.75v12.5c0 3.728-3.022 6.75-6.75 6.75H7.75C4.022 29 1 25.978 1 22.25V9.75C1 6.022 4.022 3 7.75 3h16.5zM7.75 4.5c-2.9 0-5.25 2.35-5.25 5.25v12.5c0 2.9 2.35 5.25 5.25 5.25h16.5c2.9 0 5.25-2.35 5.25-5.25V9.75c0-2.9-2.35-5.25-5.25-5.25H7.75zM11 6c1.105 0 2 .895 2 2v16c0 1.105-.895 2-2 2H8c-2.21 0-4-1.79-4-4V10c0-2.21 1.79-4 4-4h3z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInverted32.category = 'Layout';

export default CollapseSidebarInverted32;
