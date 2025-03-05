import * as React from 'react';
import { IconProps } from './types';

export const Receipt12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.16668 10.1447L1.75 11.25V.75H10.25V11.25L8.83334 10.1447 7.41667 11.25 6.00001 10.1447 4.58334 11.25 3.16668 10.1447zM4 4.75H8M4 7.25H6.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Receipt12;
