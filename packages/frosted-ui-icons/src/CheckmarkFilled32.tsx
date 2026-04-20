import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M27.3662 7.61572C27.8543 7.1279 28.6457 7.12781 29.1338 7.61572C29.6219 8.10379 29.6217 8.89512 29.1338 9.3833L12.3838 26.1333C12.1494 26.3677 11.8314 26.4995 11.5 26.4995C11.1685 26.4995 10.8506 26.3677 10.6162 26.1333L2.86621 18.3843C2.37806 17.8961 2.37806 17.1039 2.86621 16.6157C3.35434 16.1279 4.1457 16.1278 4.63379 16.6157L11.5 23.4819L27.3662 7.61572Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkFilled32.category = 'Checkmarks';

export default CheckmarkFilled32;
