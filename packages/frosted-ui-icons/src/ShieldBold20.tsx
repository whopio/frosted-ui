import * as React from 'react';
import { IconProps } from './types';

export const ShieldBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldBold20"
      {...props}
    >
      <path
        d="M9.146.152c.55-.203 1.157-.203 1.708 0l6.529 2.404C18.354 2.914 19 3.84 19 4.875v6.071c0 2.77-2.065 4.928-3.945 6.347-1.934 1.459-3.988 2.372-4.534 2.603-.336.142-.705.142-1.04 0-.547-.231-2.602-1.145-4.536-2.603C3.065 15.874 1 13.715 1 10.946V4.875c0-1.035.646-1.96 1.617-2.319L9.146.152zm1.017 1.877c-.105-.038-.221-.039-.326 0L3.309 4.432c-.185.069-.309.246-.309.443v6.071c0 1.759 1.354 3.396 3.15 4.75 1.512 1.141 3.131 1.92 3.85 2.241.719-.32 2.337-1.1 3.85-2.24 1.796-1.355 3.15-2.992 3.15-4.75V4.874c0-.197-.123-.374-.309-.443L10.163 2.03z"
        fill={color}
      />
    </svg>
  );
};

ShieldBold20.category = 'Security';

export default ShieldBold20;
