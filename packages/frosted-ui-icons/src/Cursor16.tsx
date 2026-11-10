import * as React from 'react';
import { IconProps } from './types';

export const Cursor16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Cursor16"
      {...props}
    >
      <path
        d="M1.77 3.347l3.35 10.218c.303.925 1.592.975 1.967.077l.839-2.014c.273-.657 1.127-.825 1.63-.322l2.582 2.582c.232.232.546.362.875.362.683 0 1.237-.554 1.237-1.237 0-.329-.13-.643-.362-.875l-2.582-2.582c-.503-.503-.335-1.357.322-1.63l2.014-.84c.898-.374.848-1.663-.077-1.966L3.347 1.77c-.974-.32-1.897.603-1.578 1.577z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor16.category = 'Arrows';

export default Cursor16;
