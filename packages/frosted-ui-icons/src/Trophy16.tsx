import * as React from 'react';
import { IconProps } from './types';

export const Trophy16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 3.76353C16 2.78956 15.2104 2 14.2365 2H13V1.86224C13 1.1099 12.3901 0.5 11.6378 0.5H4.36225C3.6099 0.5 3 1.1099 3 1.86225V2H1.76353C0.789561 2 0 2.78956 0 3.76353V5.22293C0 6.75666 1.24334 8 2.77707 8H3.10002C3.51447 10.0417 5.17303 11.6317 7.24997 11.9441V14H5.75C5.33579 14 5 14.3358 5 14.75C5 15.1642 5.33579 15.5 5.75 15.5H10.25C10.6642 15.5 11 15.1642 11 14.75C11 14.3358 10.6642 14 10.25 14H8.74997V11.9441C10.8269 11.6317 12.4855 10.0418 12.9 8H13.2229C14.7567 8 16 6.75666 16 5.22293V3.76353ZM7.99997 10.5C6.06697 10.5 4.5 8.933 4.5 7V2H11.5V7C11.5 8.933 9.93297 10.5 7.99997 10.5ZM14.5 3.76353C14.5 3.61799 14.382 3.5 14.2365 3.5H13V6.5H13.2229C13.9282 6.5 14.5 5.92824 14.5 5.22293V3.76353ZM1.5 5.22293C1.5 5.92824 2.07176 6.5 2.77707 6.5H3V3.5H1.76353C1.61799 3.5 1.5 3.61799 1.5 3.76353V5.22293Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Trophy16;
