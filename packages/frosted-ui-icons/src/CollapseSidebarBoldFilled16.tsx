import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarBoldFilled16"
      {...props}
    >
      <path
        d="M12 1.5c2.21 0 4 1.79 4 4v5c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-5c0-2.21 1.79-4 4-4h8zm-8 2c-1.105 0-2 .895-2 2v5c0 1.105.895 2 2 2h1v-9H4z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarBoldFilled16.category = 'Layout';

export default CollapseSidebarBoldFilled16;
