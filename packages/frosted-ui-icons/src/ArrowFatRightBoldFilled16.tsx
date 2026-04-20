import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.77209 5H2.85465C2.38264 5 2 5.38264 2 5.85465V10.1453C2 10.6174 2.38264 11 2.85465 11H7.77209C7.89796 11 8 11.102 8 11.2279V13.2023C8 13.5029 8.35998 13.6572 8.57763 13.4499L13.7801 8.49511C14.0631 8.22566 14.0631 7.77434 13.7801 7.50489L8.57763 2.55012C8.35998 2.34284 8 2.49711 8 2.79767V4.77209C8 4.89796 7.89796 5 7.77209 5Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBoldFilled16.category = 'Arrows';

export default ArrowFatRightBoldFilled16;
