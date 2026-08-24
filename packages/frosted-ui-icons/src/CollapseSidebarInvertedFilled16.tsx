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
      data-fui-icon="CollapseSidebarInvertedFilled16"
      {...props}
    >
      <path
        d="M12.25 1.5C14.321 1.5 16 3.179 16 5.25v5.5c0 2.071-1.679 3.75-3.75 3.75h-8.5C1.679 14.5 0 12.821 0 10.75v-5.5C0 3.179 1.679 1.5 3.75 1.5h8.5zm-8.75 2C2.672 3.5 2 4.172 2 5v6c0 .828.672 1.5 1.5 1.5H6c.552 0 1-.448 1-1v-7c0-.552-.448-1-1-1H3.5z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedFilled16.category = 'Layout';

export default CollapseSidebarInvertedFilled16;
