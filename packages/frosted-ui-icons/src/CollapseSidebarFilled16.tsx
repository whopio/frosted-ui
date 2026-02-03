import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.25 1.5C14.3211 1.5 16 3.17893 16 5.25V10.75C16 12.8211 14.3211 14.5 12.25 14.5H3.75C1.67893 14.5 7.70306e-09 12.8211 0 10.75V5.25C0 3.17893 1.67893 1.5 3.75 1.5H12.25ZM3.75 3C2.50736 3 1.5 4.00736 1.5 5.25V10.75C1.5 11.9926 2.50736 13 3.75 13H6V3H3.75Z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarFilled16.category = 'Interface General';

export default CollapseSidebarFilled16;
