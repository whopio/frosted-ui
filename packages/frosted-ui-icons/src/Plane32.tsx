import * as React from 'react';
import { IconProps } from './types';

export const Plane32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.2614 13.3029L15.9461 4.67218H12.7095L14.8672 13.3029H8.93361L5.6971 10.0664H3L5.15768 16L3 21.9336H5.6971L8.93361 18.6971H14.8672L12.7095 27.3278H15.9461L20.2614 18.6971H26.3029C27.7925 18.6971 29 17.4895 29 16C29 14.5104 27.7925 13.3029 26.3029 13.3029H20.2614Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plane32;
