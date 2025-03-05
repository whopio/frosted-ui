import * as React from 'react';
import { IconProps } from './types';

export const Pencil32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.125 8.125L23.875 14.875M11.75 27.9999L2.75 29.2499L4 20.2499L20.0415 4.20843C20.9753 3.27461 22.2419 2.75 23.5625 2.75C24.8831 2.75 26.1496 3.27459 27.0834 4.20838L27.7916 4.91656C28.7254 5.85035 29.25 7.11686 29.25 8.43747C29.25 9.75805 28.7254 11.0245 27.7916 11.9583L11.75 27.9999Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Pencil32;
