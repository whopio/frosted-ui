import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBold20"
      {...props}
    >
      <path
        d="M9.146.152c.55-.203 1.157-.203 1.708 0l6.529 2.405C18.354 2.914 19 3.84 19 4.875v6.071c0 2.77-2.065 4.928-3.945 6.347-1.934 1.459-3.988 2.372-4.534 2.603-.336.142-.705.142-1.04 0-.547-.23-2.601-1.144-4.536-2.603C3.065 15.875 1 13.715 1 10.946V4.875c0-1.035.646-1.96 1.617-2.318L9.146.152zm-5.837 4.28c-.186.069-.309.246-.309.443v6.071c0 1.759 1.354 3.396 3.15 4.75 1 .755 2.048 1.35 2.85 1.76V2.336L3.309 4.434zM11 17.457c.802-.41 1.85-1.005 2.85-1.76 1.796-1.354 3.15-2.991 3.15-4.75V4.875c0-.197-.123-.374-.309-.442L11 2.337v15.119z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBold20.category = 'Security';

export default ShieldHalfBold20;
