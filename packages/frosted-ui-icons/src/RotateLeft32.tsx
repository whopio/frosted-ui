import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M5.65394 19.6667C7.16408 23.9391 11.2386 27 16.0281 27C22.1032 27 27.0281 22.0751 27.0281 16C27.0281 9.92487 22.1032 5 16.0281 5C12.2718 5 9.76128 6.60584 7.33341 9.34521M6.33341 5.33333V9.66667C6.33341 10.2189 6.78114 10.6667 7.33341 10.6667L11.6667 10.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateLeft32;
