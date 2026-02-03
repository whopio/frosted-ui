import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInverted32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.25 2.5C27.9779 2.5 31 5.52208 31 9.25V22.75C31 26.4779 27.9779 29.5 24.25 29.5H7.75C4.02208 29.5 1 26.4779 1 22.75V9.25C1 5.52208 4.02208 2.5 7.75 2.5H24.25ZM7.75 4C4.85051 4 2.5 6.35051 2.5 9.25V22.75C2.5 25.6495 4.85051 28 7.75 28H24.25C27.1495 28 29.5 25.6495 29.5 22.75V9.25C29.5 6.35051 27.1495 4 24.25 4H7.75ZM11 5.5C12.1046 5.5 13 6.39543 13 7.5V24.5C13 25.6046 12.1046 26.5 11 26.5H8C5.79086 26.5 4 24.7091 4 22.5V9.5C4 7.29086 5.79086 5.5 8 5.5H11Z"
        fill={color}
      />
    </svg>
  );
};

export default CollapseSidebarInverted32;
