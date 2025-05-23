import * as React from 'react';
import { IconProps } from './types';

export const Document32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M27.25 11.25H21.72C19.6655 11.25 18 9.5845 18 7.53V1.75M27.25 11.2564V26.53C27.25 28.5845 25.5845 30.25 23.53 30.25H8.47C6.4155 30.25 4.75 28.5845 4.75 26.53V5.47C4.75 3.4155 6.4155 1.75 8.47 1.75H17.9244C18.9315 1.75 19.8956 2.15832 20.5963 2.88164L26.2019 8.66804C26.8741 9.36198 27.25 10.2902 27.25 11.2564Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Document32;
