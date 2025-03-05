import * as React from 'react';
import { IconProps } from './types';

export const Apps20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.99982 0.749991V3.74995M9.99982 3.74995C8.20492 3.74995 6.74986 5.20501 6.74986 6.99991C6.74986 8.79482 8.20492 10.2499 9.99982 10.2499C11.7947 10.2499 13.2498 8.79482 13.2498 6.99991C13.2498 5.20501 11.7947 3.74995 9.99982 3.74995ZM8.23931 9.73218L3.7499 19.2497M16.2497 19.2497L11.7603 9.73218M16.9998 11.9999C16.9998 11.9999 15.0293 15.9998 9.99988 15.9998C4.97043 15.9998 2.99996 11.9999 2.99996 11.9999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Apps20;
