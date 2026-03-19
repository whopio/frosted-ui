import * as React from 'react';
import { IconProps } from './types';

export const BarGraph32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 18.385C1.75 17.2804 2.64543 16.385 3.75 16.385H10.9932V30.2496H3.75C2.64543 30.2496 1.75 29.3542 1.75 28.2496L1.75 18.385zM21.0078 9.45264C23.8949 9.45264 25.7672 9.45264 28.2484 9.45264 29.3529 9.45264 30.249 10.3481 30.249 11.4526V28.25C30.249 29.3545 29.3536 30.25 28.249 30.25H21.0078V9.45264z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M10.9922 3.75C10.9922 2.64543 11.8876 1.75 12.9922 1.75H19.0057C20.1103 1.75 21.0057 2.64543 21.0057 3.75V30.25H10.9922V3.75Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph32.category = 'Stats & Charts';

export default BarGraph32;
