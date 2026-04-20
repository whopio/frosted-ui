import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.22791 5H13.1453C13.6174 5 14 5.38264 14 5.85465V10.1453C14 10.6174 13.6174 11 13.1453 11H8.22791C8.10204 11 8 11.102 8 11.2279V13.2023C8 13.5029 7.64002 13.6572 7.42237 13.4499L2.21986 8.49511C1.93694 8.22566 1.93694 7.77434 2.21986 7.50489L7.42237 2.55012C7.64002 2.34284 8 2.49711 8 2.79767V4.77209C8 4.89796 8.10204 5 8.22791 5Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBoldFilled16.category = 'Arrows';

export default ArrowFatLeftBoldFilled16;
