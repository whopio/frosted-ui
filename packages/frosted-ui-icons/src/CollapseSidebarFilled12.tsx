import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarFilled12"
      {...props}
    >
      <path
        d="M9 1c1.657 0 3 1.343 3 3v4c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V4c0-1.657 1.343-3 3-3h6zM3 2.5c-.828 0-1.5.672-1.5 1.5v4c0 .828.672 1.5 1.5 1.5h1v-7H3z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarFilled12.category = 'Layout';

export default CollapseSidebarFilled12;
