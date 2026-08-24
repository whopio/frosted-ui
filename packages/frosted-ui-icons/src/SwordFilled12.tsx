import * as React from 'react';
import { IconProps } from './types';

export const SwordFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SwordFilled12"
      {...props}
    >
      <path
        d="M.588 5.373c.317-.317.831-.318 1.148 0L3.64 7.277 5.722 9.36l1.904 1.904c.317.318.317.832 0 1.149-.317.317-.832.316-1.149 0l-1.395-1.395-2.002 1.576c-.757.596-1.841.531-2.523-.15-.681-.682-.745-1.765-.15-2.523l1.575-2.005L.588 6.521C.27 6.204.27 5.69.588 5.373zM11.212 0C12.2 0 13 .8 13 1.787v2.525c0 1.008-.433 1.968-1.188 2.636l-3.293 2.91L6.871 8.21H6.87l-.467-.466L8.71 5.438c.317-.317.317-.831 0-1.148-.317-.318-.831-.317-1.149 0L5.255 6.595l-.468-.466h.001L3.14 4.479l2.922-3.295C6.73.431 7.689 0 8.695 0h2.517z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SwordFilled12.category = 'Objects';

export default SwordFilled12;
