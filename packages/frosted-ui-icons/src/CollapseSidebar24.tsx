import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebar24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebar24"
      {...props}
    >
      <path
        d="M8.75 2.25h-3.5c-2.485 0-4.5 2.015-4.5 4.5v10.5c0 2.485 2.015 4.5 4.5 4.5h3.5m0-19.5h10c2.485 0 4.5 2.015 4.5 4.5v10.5c0 2.485-2.015 4.5-4.5 4.5h-10m0-19.5v19.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CollapseSidebar24.category = 'Layout';

export default CollapseSidebar24;
