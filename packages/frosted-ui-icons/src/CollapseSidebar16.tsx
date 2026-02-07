import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebar16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.25 2.25H3.75C2.09315 2.25 0.75 3.59315 0.75 5.25V10.75C0.75 12.4069 2.09315 13.75 3.75 13.75H6.25M6.25 2.25H12.25C13.9069 2.25 15.25 3.59315 15.25 5.25V10.75C15.25 12.4069 13.9069 13.75 12.25 13.75H6.25M6.25 2.25V13.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CollapseSidebar16.category = 'Layout';

export default CollapseSidebar16;
