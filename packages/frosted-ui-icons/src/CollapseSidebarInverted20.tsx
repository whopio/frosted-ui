import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInverted20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInverted20"
      {...props}
    >
      <path
        d="M15.5 1.5C17.985 1.5 20 3.515 20 6v8c0 2.485-2.015 4.5-4.5 4.5h-11C2.015 18.5 0 16.485 0 14V6c0-2.485 2.015-4.5 4.5-4.5h11zM4.5 3c-1.657 0-3 1.343-3 3v8c0 1.657 1.343 3 3 3h11c1.657 0 3-1.343 3-3V6c0-1.657-1.343-3-3-3h-11zm2 1.5C7.328 4.5 8 5.172 8 6v8c0 .828-.672 1.5-1.5 1.5H5c-1.105 0-2-.895-2-2v-7c0-1.105.895-2 2-2h1.5z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInverted20.category = 'Layout';

export default CollapseSidebarInverted20;
