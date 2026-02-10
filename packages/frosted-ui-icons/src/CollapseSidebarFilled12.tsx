import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 1C10.6569 1 12 2.34315 12 4V8C12 9.65685 10.6569 11 9 11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H9ZM3 2.5C2.17157 2.5 1.5 3.17157 1.5 4V8C1.5 8.82843 2.17157 9.5 3 9.5H4V2.5H3Z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarFilled12.category = 'Layout';

export default CollapseSidebarFilled12;
