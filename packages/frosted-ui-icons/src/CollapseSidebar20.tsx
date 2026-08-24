import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebar20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebar20"
      {...props}
    >
      <path
        d="M7.75 2.25H4.5C2.429 2.25.75 3.929.75 6v8c0 2.071 1.679 3.75 3.75 3.75h3.25m0-15.5h7.75c2.071 0 3.75 1.679 3.75 3.75v8c0 2.071-1.679 3.75-3.75 3.75H7.75m0-15.5v15.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CollapseSidebar20.category = 'Layout';

export default CollapseSidebar20;
