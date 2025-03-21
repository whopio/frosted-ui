import * as React from 'react';
import { IconProps } from './types';

export const Parachute24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M1.75 12.25L6.75 17.75M1.75 12.25C1.75 12.25 2 1.75 12 1.75C22 1.75 22.25 12.25 22.25 12.25M1.75 12.25C1.75 12.25 3.00016 9.74999 6.87516 9.74999C10.7502 9.74999 12 12.25 12 12.25M17.25 17.75L22.25 12.25M22.25 12.25C22.25 12.25 21 9.75 17.125 9.75C13.25 9.75 12 12.25 12 12.25M12 12.25V17.75M6.75 18.25V21.25C6.75 21.8023 7.19771 22.25 7.75 22.25H16.25C16.8023 22.25 17.25 21.8023 17.25 21.25V18.25C17.25 17.9739 17.0261 17.75 16.75 17.75H7.25C6.97386 17.75 6.75 17.9739 6.75 18.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Parachute24;
