import * as React from 'react';
import { IconProps } from './types';

export const Download32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30.25 29.5001C30.6642 29.5001 31 29.8358 31 30.2501C31 30.6642 30.6642 31.0001 30.25 31.0001H1.75C1.33581 31.0001 1.00003 30.6642 1 30.2501C1 29.8358 1.33579 29.5001 1.75 29.5001H30.25ZM16 1.00006C16.4142 1.00006 16.75 1.33585 16.75 1.75006V24.4395L25.9697 15.2198C26.2626 14.9269 26.7374 14.9269 27.0303 15.2198C27.3232 15.5127 27.3232 15.9874 27.0303 16.2803L16.5303 26.7803C16.2374 27.0732 15.7626 27.0732 15.4697 26.7803L4.96973 16.2803C4.67683 15.9874 4.67683 15.5127 4.96973 15.2198C5.26262 14.9269 5.73738 14.9269 6.03027 15.2198L15.25 24.4395V1.75006C15.25 1.33585 15.5858 1.00006 16 1.00006Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Download32.category = 'Arrows';

export default Download32;
