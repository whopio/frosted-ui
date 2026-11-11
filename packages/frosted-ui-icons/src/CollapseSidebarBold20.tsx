import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarBold20"
      {...props}
    >
      <path
        d="M8 2.5H4.75C2.679 2.5 1 4.179 1 6.25v7.5c0 2.071 1.679 3.75 3.75 3.75H8m0-15h7.25C17.321 2.5 19 4.179 19 6.25v7.5c0 2.071-1.679 3.75-3.75 3.75H8m0-15v15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CollapseSidebarBold20.category = 'Layout';

export default CollapseSidebarBold20;
