import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBold32"
      {...props}
    >
      <path
        d="M28.007 9H16.531C16.238 9 16 8.762 16 8.469V3.955c0-.7-.836-1.06-1.345-.58L2.525 14.842c-.665.63-.665 1.688 0 2.318l12.13 11.465c.509.48 1.345.12 1.345-.579v-4.514c0-.293.238-.531.531-.531h11.476c1.1 0 1.993-.892 1.993-1.993V10.993C30 9.893 29.108 9 28.007 9z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold32.category = 'Arrows';

export default ArrowFatLeftBold32;
