import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9 1C10.6569 1 12 2.34315 12 4V8C12 9.65685 10.6569 11 9 11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H9ZM3 3C2.44772 3 2 3.44772 2 4V8C2 8.55228 2.44772 9 3 9H4.75C5.16421 9 5.5 8.66421 5.5 8.25V3.75C5.5 3.33579 5.16421 3 4.75 3H3Z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedFilled12.category = 'Layout';

export default CollapseSidebarInvertedFilled12;
