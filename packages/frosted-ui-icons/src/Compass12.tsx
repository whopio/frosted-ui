import * as React from 'react';
import { IconProps } from './types';

export const Compass12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_5548_23)">
        <path
          d="M6 0C9.31371 1.28855e-07 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 1.28851e-07 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM7.0332 3.9082C7.71903 3.69472 8.37923 4.41855 8.03711 5.10352L7.32031 6.53711C7.15098 6.87578 6.87578 7.15098 6.53711 7.32031L5.10352 8.03711C4.37312 8.40193 3.59807 7.62688 3.96289 6.89648L4.53125 5.76074C4.79733 5.22869 5.22869 4.79733 5.76074 4.53125L6.89648 3.96289L7.0332 3.9082Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5548_23">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Compass12;
