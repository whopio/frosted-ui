import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_7206_124)">
        <path
          d="M10 0C13.4503 0 15.9777 1.26947 17.6318 3.19922C19.2699 5.11035 20 7.60721 20 10V15.5C20 17.9853 17.9853 20 15.5 20C14.3954 20 13.5 19.1046 13.5 18V13C13.5 11.8954 14.3954 11 15.5 11C16.6527 11 17.7038 11.4338 18.5 12.1465V10C18.5 7.89286 17.855 5.76464 16.4932 4.17578C15.1473 2.60562 13.0496 1.5 10 1.5C6.95037 1.5 4.85269 2.60562 3.50684 4.17578C2.14504 5.76464 1.5 7.89286 1.5 10V12.1465C2.29617 11.4338 3.34731 11 4.5 11C5.60457 11 6.5 11.8954 6.5 13V18C6.5 19.1046 5.60457 20 4.5 20C2.01472 20 0 17.9853 0 15.5V10C0 7.60721 0.730054 5.11035 2.36816 3.19922C4.02231 1.26947 6.54973 0 10 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_7206_124">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeadphonesFilled20;
