import * as React from 'react';
import { IconProps } from './types';

export const Bulb32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.9999 20.25V13.75M15.9999 13.75L12.75 13.75M15.9999 13.75H19.25M11.1999 30.4001H20.7999M4.66663 12C4.66663 15.7454 7.00456 18.4516 8.76164 19.9567C9.86491 20.9017 10.6666 22.2343 10.6666 23.687V24.3334C10.6666 25.4379 11.5621 26.3334 12.6666 26.3334H19.3333C20.4379 26.3334 21.3333 25.4379 21.3333 24.3334V23.687C21.3333 22.2343 22.135 20.9017 23.2383 19.9567C24.9954 18.4516 27.3333 15.7454 27.3333 12C27.3333 6.00004 22.9999 1.20007 15.9999 1.20007C8.99993 1.20007 4.66663 6.00004 4.66663 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Bulb32;
