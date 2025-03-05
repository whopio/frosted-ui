import * as React from 'react';
import { IconProps } from './types';

export const Compress16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00008 5.39583V.8125M8.00008 5.39583L5.66675 3.0625M8.00008 5.39583L10.3334 3.0625M8.00004 10.604L8.00004 15.1873M8.00004 10.604L10.3334 12.9373M8.00004 10.604L5.66671 12.9373M2.5 8H13.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Compress16;
