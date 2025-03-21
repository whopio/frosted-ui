import * as React from 'react';
import { IconProps } from './types';

export const HourGlass32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12.6667 16C12.6667 12.2385 6.77137 13.7828 6.06829 4.0016C5.9891 2.89987 6.89543 2 8 2H24C25.1046 2 26.0109 2.89987 25.9317 4.0016C25.2286 13.7828 19.3333 12.2385 19.3333 16C19.3333 19.7615 25.2286 18.2172 25.9317 27.9984C26.0109 29.1001 25.1046 30 24 30H8C6.89543 30 5.9891 29.1001 6.06829 27.9984C6.77137 18.2172 12.6667 19.7615 12.6667 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9057 11.5085C12.7162 10.4154 10.7279 8.7441 10.161 6.98261C9.99178 6.45688 10.4483 6 11.0006 6H20.9994C21.5517 6 22.0082 6.45688 21.839 6.98261C21.2721 8.7441 19.2838 10.4154 17.0943 11.5085C16.4051 11.8526 15.5949 11.8526 14.9057 11.5085Z"
        fill={color}
      />
    </svg>
  );
};

export default HourGlass32;
