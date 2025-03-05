import * as React from 'react';
import { IconProps } from './types';

export const LeaveReview32 = ({
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
        d="M16.2772 3H11.2772C6.85894 3 3.27722 6.58172 3.27722 11V21C3.27722 25.4183 6.85894 29 11.2772 29H21.2772C25.6955 29 29.2772 25.4183 29.2772 21V16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2218 5.56276L13.1647 14.6198C12.8855 14.899 12.6952 15.2546 12.6177 15.6418L12.0289 18.5863C11.8609 19.426 12.6012 20.1663 13.4409 19.9983L16.3854 19.4094C16.7725 19.332 17.1281 19.1417 17.4073 18.8625L26.4644 9.8054M22.2218 5.56276L23.636 4.14854C24.8076 2.97697 26.7071 2.97697 27.8786 4.14854V4.14854C29.0502 5.32011 29.0502 7.21961 27.8786 8.39118L26.4644 9.8054M22.2218 5.56276L26.4644 9.8054"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LeaveReview32;
