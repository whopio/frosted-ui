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
        d="M.587 5.373c.317-.317.831-.317 1.148 0L3.64 7.277 5.722 9.36l1.903 1.904c.317.318.317.832 0 1.149-.317.316-.831.316-1.148 0l-1.395-1.395-2.002 1.576c-.758.595-1.842.53-2.524-.15-.68-.682-.745-1.765-.15-2.523l1.575-2.005L.587 6.521C.27 6.204.27 5.69.587 5.373zM11.211 0C12.198 0 13 .8 13 1.787v2.525c0 1.008-.434 1.968-1.189 2.636l-3.292 2.91L6.87 8.21H6.87l-.466-.466 2.306-2.306c.317-.317.317-.831 0-1.148-.317-.317-.831-.317-1.148 0L5.254 6.595l-.467-.466-1.648-1.65L6.06 1.184C6.729.432 7.688 0 8.694 0h2.517z"
        fill={color}
      />
    </svg>
  );
};

SwordFilled12.category = 'Objects';

export default SwordFilled12;
