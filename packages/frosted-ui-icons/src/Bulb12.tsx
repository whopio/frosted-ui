import * as React from 'react';
import { IconProps } from './types';

export const Bulb12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M6 6.5V5M6 5H4.875M6 5H7.125M4.125 11.25H7.875M2 4.5C2 5.87106 2.64981 6.68514 3.15749 7.11194C3.48762 7.38948 3.75 7.77964 3.75 8.21093C3.75 8.50865 3.99135 8.75 4.28907 8.75H7.71093C8.00865 8.75 8.25 8.50865 8.25 8.21093C8.25 7.77964 8.51238 7.38948 8.84251 7.11194C9.35019 6.68514 10 5.87106 10 4.5C10 2.25 8.625 0.75 6 0.75C3.375 0.75 2 2.25 2 4.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Bulb12;
