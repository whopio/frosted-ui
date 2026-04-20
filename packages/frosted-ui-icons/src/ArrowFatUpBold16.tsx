import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 8.22791V13.1453C5 13.6174 5.38264 14 5.85465 14H10.1453C10.6174 14 11 13.6174 11 13.1453V8.22791C11 8.10204 11.102 8 11.2279 8H13.2023C13.5029 8 13.6572 7.64002 13.4499 7.42237L8.49511 2.21986C8.22566 1.93694 7.77434 1.93694 7.50489 2.21986L2.55012 7.42237C2.34284 7.64002 2.49711 8 2.79767 8H4.77209C4.89796 8 5 8.10204 5 8.22791Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold16.category = 'Arrows';

export default ArrowFatUpBold16;
