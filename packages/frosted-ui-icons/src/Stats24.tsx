import * as React from 'react';
import { IconProps } from './types';

export const Stats24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.25 3.5625V18.125C2.25 19.5747 3.42525 20.75 4.875 20.75H21.9375M5.125 15.125L10 10.25L13.375 13.625L19.75 7.25M19.75 7.25H16.375M19.75 7.25V10.625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Stats24;
