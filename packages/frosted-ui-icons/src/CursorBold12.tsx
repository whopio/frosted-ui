import * as React from 'react';
import { IconProps } from './types';

export const CursorBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.99956 11.1508L1.20169 2.9876C0.822481 1.88121 1.88121 0.822482 2.98761 1.20169L11.1508 3.99956C12.0988 4.32449 12.1919 5.62864 11.2996 6.08492L10.2461 6.62368C9.59245 6.95791 9.45461 7.8323 9.9737 8.35139L11.5802 9.95785C11.783 10.1607 11.8969 10.4358 11.8969 10.7226V10.8154C11.8969 11.4127 11.4127 11.8969 10.8154 11.8969H10.7226C10.4358 11.8969 10.1607 11.783 9.95785 11.5802L8.35139 9.9737C7.8323 9.45461 6.95791 9.59245 6.62368 10.2461L6.08492 11.2996C5.62864 12.1919 4.32449 12.0988 3.99956 11.1508Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold12.category = 'Arrows';

export default CursorBold12;
