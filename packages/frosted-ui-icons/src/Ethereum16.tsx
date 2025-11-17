import * as React from 'react';
import { IconProps } from './types';

export const Ethereum16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.29395 6.8553L8.00009 9.14478L12.7062 6.8553L8.00009 0.75004L3.29395 6.8553Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.29395 8.89038L8.00009 11.4342L12.7062 8.89038L8.00009 15.25L3.29395 8.89038Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ethereum16;
