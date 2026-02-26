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
        d="M1.75 19.0993C1.75 17.6002 2.96523 16.385 4.46428 16.385H10.9932V30.2496H4.46428C2.96523 30.2496 1.75 29.0344 1.75 27.5354L1.75 19.0993zM21.0078 9.45264H27.5348C29.0338 9.45264 30.249 10.6679 30.249 12.1669V27.5357C30.249 29.0347 29.0338 30.25 27.5348 30.25H21.0078V9.45264z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M10.9922 4.46428C10.9922 2.96522 12.2074 1.75 13.7065 1.75H18.2914C19.7905 1.75 21.0057 2.96523 21.0057 4.46428V30.25H10.9922V4.46428Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph32.category = 'Stats & Charts';

export default BarGraph32;
