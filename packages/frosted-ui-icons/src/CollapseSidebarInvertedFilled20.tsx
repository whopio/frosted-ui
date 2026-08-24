import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInvertedFilled20"
      {...props}
    >
      <path
        d="M15.5 1.5C17.985 1.5 20 3.515 20 6v8c0 2.485-2.015 4.5-4.5 4.5h-11C2.015 18.5 0 16.485 0 14V6c0-2.485 2.015-4.5 4.5-4.5h11zm-11 2C3.12 3.5 2 4.62 2 6v8c0 1.38 1.12 2.5 2.5 2.5h2c.828 0 1.5-.672 1.5-1.5V5c0-.828-.672-1.5-1.5-1.5h-2z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedFilled20.category = 'Layout';

export default CollapseSidebarInvertedFilled20;
