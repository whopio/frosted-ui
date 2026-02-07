import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.25 1.5C14.3211 1.5 16 3.17893 16 5.25V10.75C16 12.8211 14.3211 14.5 12.25 14.5H3.75C1.67893 14.5 0 12.8211 0 10.75V5.25C0 3.17893 1.67893 1.5 3.75 1.5H12.25ZM3.5 3.5C2.67157 3.5 2 4.17157 2 5V11C2 11.8284 2.67157 12.5 3.5 12.5H6C6.55228 12.5 7 12.0523 7 11.5V4.5C7 3.94772 6.55228 3.5 6 3.5H3.5Z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedFilled16.category = 'Layout';

export default CollapseSidebarInvertedFilled16;
