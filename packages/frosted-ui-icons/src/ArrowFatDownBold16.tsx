import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 7.77209V2.85465C5 2.38264 5.38264 2 5.85465 2H10.1453C10.6174 2 11 2.38264 11 2.85465V7.77209C11 7.89796 11.102 8 11.2279 8H13.2023C13.5029 8 13.6572 8.35998 13.4499 8.57763L8.49511 13.7801C8.22566 14.0631 7.77434 14.0631 7.50489 13.7801L2.55012 8.57763C2.34284 8.35998 2.49711 8 2.79767 8H4.77209C4.89796 8 5 7.89796 5 7.77209Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold16.category = 'Arrows';

export default ArrowFatDownBold16;
