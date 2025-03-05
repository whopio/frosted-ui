import * as React from 'react';
import { IconProps } from './types';

export const Copy24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.75 13.25V3.75C9.75 2.64543 10.6454 1.75 11.75 1.75H20.25C21.3546 1.75 22.25 2.64543 22.25 3.75V13.25C22.25 14.3546 21.3546 15.25 20.25 15.25H11.75C10.6454 15.25 9.75 14.3546 9.75 13.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 8.75H3.75C2.64543 8.75 1.75 9.64543 1.75 10.75V20.25C1.75 21.3546 2.64543 22.25 3.75 22.25H12.25C13.3546 22.25 14.25 21.3546 14.25 20.25V18.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Copy24;
