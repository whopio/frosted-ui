import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInverted16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInverted16"
      {...props}
    >
      <path
        d="M12.25 1.5C14.321 1.5 16 3.179 16 5.25v5.5c0 2.071-1.679 3.75-3.75 3.75h-8.5C1.679 14.5 0 12.821 0 10.75v-5.5C0 3.179 1.679 1.5 3.75 1.5h8.5zM3.75 3C2.507 3 1.5 4.007 1.5 5.25v5.5C1.5 11.993 2.507 13 3.75 13h8.5c1.243 0 2.25-1.007 2.25-2.25v-5.5C14.5 4.007 13.493 3 12.25 3h-8.5zM6 4.5c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1H4.25c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25H6z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInverted16.category = 'Layout';

export default CollapseSidebarInverted16;
