import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBoldFilled20"
      {...props}
    >
      <path
        d="M9.146.152c.55-.203 1.157-.203 1.708 0l6.529 2.405C18.354 2.914 19 3.84 19 4.875v6.071c0 2.77-2.065 4.928-3.945 6.347-1.934 1.459-3.988 2.372-4.534 2.603-.336.142-.705.142-1.04 0-.547-.23-2.601-1.144-4.536-2.603C3.065 15.875 1 13.715 1 10.946V4.875c0-1.035.646-1.96 1.617-2.318L9.146.152zM10 17.937c.718-.32 2.338-1.1 3.85-2.24 1.796-1.355 3.15-2.992 3.15-4.75V4.874c0-.197-.123-.374-.309-.442l-6.528-2.404C10.11 2.01 10.055 2 10 2v15.938z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBoldFilled20.category = 'Security';

export default ShieldHalfBoldFilled20;
