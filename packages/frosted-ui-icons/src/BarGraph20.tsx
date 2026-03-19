import * as React from 'react';
import { IconProps } from './types';

export const BarGraph20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M.75 11.55C.75 10.832 1.33246 10.25 2.05043 10.25 3.66062 10.25 4.87611 10.25 6.75 10.25V19.2498H2.05C1.33203 19.2498.75 18.6678.75 17.9498L.75 11.55zM13.25 5.75H17.9487C18.6667 5.75 19.2487 6.33203 19.2487 7.05V17.95C19.2487 18.668 18.6667 19.25 17.9487 19.25H13.25V5.75zM6.75 2.05C6.75 1.33203 7.33203.75 8.05.75H11.95C12.668.75 13.25 1.33203 13.25 2.05V19.25H6.75V2.05z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph20.category = 'Stats & Charts';

export default BarGraph20;
