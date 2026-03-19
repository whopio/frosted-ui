import * as React from 'react';
import { IconProps } from './types';

export const BarGraph24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M.75 13.804C.75 12.9755 1.42157 12.304 2.25 12.304H8.04729V23.2497H2.25C1.42157 23.2497.75 22.5781.75 21.7497L.75 13.804zM15.9531 6.83105H21.7488C22.5773 6.83105 23.2488 7.50263 23.2488 8.33105V21.75C23.2488 22.5784 22.5773 23.25 21.7488 23.25H15.9531V6.83105z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M8.04688 2.25C8.04688 1.42157 8.71845 0.75 9.54688 0.75H14.4523C15.2807 0.75 15.9523 1.42157 15.9523 2.25V23.25H8.04688V2.25Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph24.category = 'Stats & Charts';

export default BarGraph24;
