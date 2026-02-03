import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M24.25 2.5C27.9779 2.5 31 5.52208 31 9.25V22.75C31 26.4779 27.9779 29.5 24.25 29.5H7.75C4.02208 29.5 1 26.4779 1 22.75V9.25C1 5.52208 4.02208 2.5 7.75 2.5H24.25ZM7.75 4C4.85051 4 2.5 6.35051 2.5 9.25V22.75C2.5 25.6495 4.85051 28 7.75 28H11V4H7.75Z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarFilled32.category = 'Interface General';

export default CollapseSidebarFilled32;
