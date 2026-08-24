import * as React from 'react';
import { IconProps } from './types';

export const Cursor24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Cursor24"
      {...props}
    >
      <path
        d="M8.644 21.493L1.863 3.603c-.413-1.087.652-2.153 1.74-1.74l17.89 6.782c.914.346 1.025 1.594.187 2.097l-4.332 2.6c-.558.334-.653 1.104-.193 1.564l4.629 4.628c.298.298.466.703.466 1.125 0 .879-.712 1.591-1.591 1.591-.422 0-.827-.168-1.125-.466l-4.629-4.628c-.46-.46-1.23-.366-1.564.192l-2.6 4.332c-.502.839-1.75.727-2.097-.187z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor24.category = 'Arrows';

export default Cursor24;
