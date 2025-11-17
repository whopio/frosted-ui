import * as React from 'react';
import { IconProps } from './types';

export const Reply32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.55281 15.5033L13.888 5.33065C14.3172 4.94545 14.9999 5.25008 14.9999 5.82681V11.3328C26.3332 11.3328 29.3332 15.6661 29.3332 26.9995C27.3332 22.9995 26.3332 20.6661 14.9999 20.6661V26.172C14.9999 26.7488 14.3172 27.0535 13.888 26.6683L2.55281 16.4956C2.25762 16.2307 2.25762 15.7681 2.55281 15.5033Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reply32;
