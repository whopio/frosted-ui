import * as React from 'react';
import { IconProps } from './types';

export const Upload32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.6666 9.33329L16.9427 4.60943C16.4221 4.08876 15.5778 4.08876 15.0571 4.60943L10.3333 9.33329M15.9999 23.3333V4.66663M25.6666 28.6666H6.33325"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Upload32;
