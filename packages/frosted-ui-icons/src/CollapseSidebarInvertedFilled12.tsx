import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInvertedFilled12"
      {...props}
    >
      <path
        d="M9 1c1.657 0 3 1.343 3 3v4c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V4c0-1.657 1.343-3 3-3h6zM3 3c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h1.75c.414 0 .75-.336.75-.75v-4.5c0-.414-.336-.75-.75-.75H3z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedFilled12.category = 'Layout';

export default CollapseSidebarInvertedFilled12;
