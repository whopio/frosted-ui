import * as React from 'react';
import { IconProps } from './types';

export const HappyPlus16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12.5 5.16667V3.16667M12.5 3.16667V1.16667M12.5 3.16667H10.5M12.5 3.16667H14.5M14.9765 6.02068C15.1547 6.64984 15.25 7.31379 15.25 8 15.25 12.0041 12.0041 15.25 8 15.25 3.99594 15.25.75 12.0041.75 8 .75 3.99594 3.99594.75 8 .75 8.67877.75 9.33576.843279 9.95883 1.01772"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4.875" cy="8.875" r=".875" fill={color} />
      <circle
        cx=".875"
        cy=".875"
        r=".875"
        transform="matrix(-1 0 0 1 12 8)"
        fill={color}
      />
      <path
        d="M10.125 11C10.125 11 9.5 12.25 8 12.25C6.5 12.25 5.875 11 5.875 11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HappyPlus16;
