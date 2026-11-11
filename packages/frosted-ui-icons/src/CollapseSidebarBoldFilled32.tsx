import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarBoldFilled32"
      {...props}
    >
      <path
        d="M24 3c3.866 0 7 3.134 7 7v12c0 3.866-3.134 7-7 7H8c-3.866 0-7-3.134-7-7V10c0-3.866 3.134-7 7-7h16zM8 5c-2.761 0-5 2.239-5 5v12c0 2.761 2.239 5 5 5h3V5H8z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarBoldFilled32.category = 'Layout';

export default CollapseSidebarBoldFilled32;
