import * as React from 'react';
import { IconProps } from './types';

export const Codeblock32 = ({
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
        d="M6.16044 16.0809L6.16044 20.4594C6.16044 21.9528 6.16044 22.6996 6.45111 23.27C6.70671 23.7718 7.11471 24.1798 7.61644 24.4354C8.18684 24.726 8.93364 24.726 10.4271 24.726L21.2271 24.726C22.7206 24.726 23.4673 24.726 24.0377 24.4354C24.5395 24.1798 24.9475 23.7718 25.2031 23.27C25.4938 22.6996 25.4938 21.9528 25.4938 20.4594L25.4938 9.55937C25.4938 8.16015 25.4938 7.46054 25.2377 6.91922C24.974 6.3615 24.525 5.91251 23.9673 5.64873C23.4259 5.3927 22.7263 5.3927 21.3271 5.3927H20.1213"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.688 6.81567L17.7698 8.69326C18.3266 9.19544 18.3266 9.97875 17.7698 10.4809L15.688 12.3585M9.77029 13.9405L13.4165 5.00003M7.49937 12.3585L5.4176 10.4809C4.8608 9.97875 4.8608 9.19544 5.4176 8.69326L7.49937 6.81567"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Codeblock32;
