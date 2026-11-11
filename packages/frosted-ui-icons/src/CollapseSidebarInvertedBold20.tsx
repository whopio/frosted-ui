import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInvertedBold20"
      {...props}
    >
      <path
        d="M15.25 1.5C17.873 1.5 20 3.627 20 6.25v7.5c0 2.623-2.127 4.75-4.75 4.75H4.75C2.127 18.5 0 16.373 0 13.75v-7.5C0 3.627 2.127 1.5 4.75 1.5h10.5zm-10.5 2C3.231 3.5 2 4.731 2 6.25v7.5c0 1.519 1.231 2.75 2.75 2.75h10.5c1.519 0 2.75-1.231 2.75-2.75v-7.5c0-1.519-1.231-2.75-2.75-2.75H4.75zM6.5 5C7.328 5 8 5.672 8 6.5v7c0 .828-.672 1.5-1.5 1.5H5c-.828 0-1.5-.672-1.5-1.5v-7C3.5 5.672 4.172 5 5 5h1.5z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedBold20.category = 'Layout';

export default CollapseSidebarInvertedBold20;
