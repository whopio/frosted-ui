import * as React from 'react';
import { IconProps } from './types';

export const Underline20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.79163 17.2917H15.2083M4.79163 3.125V10C4.79163 12.8765 7.12348 15.2083 9.99996 15.2083C12.8765 15.2083 15.2083 12.8765 15.2083 10V3.125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Underline20;
