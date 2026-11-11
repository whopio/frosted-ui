import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInvertedBoldFilled16"
      {...props}
    >
      <path
        d="M12.25 1.5C14.321 1.5 16 3.179 16 5.25v5.5c0 2.071-1.679 3.75-3.75 3.75h-8.5C1.679 14.5 0 12.821 0 10.75v-5.5C0 3.179 1.679 1.5 3.75 1.5h8.5zM4 3.5c-1.105 0-2 .895-2 2v5c0 1.105.895 2 2 2h2c.552 0 1-.448 1-1v-7c0-.552-.448-1-1-1H4z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedBoldFilled16.category = 'Layout';

export default CollapseSidebarInvertedBoldFilled16;
