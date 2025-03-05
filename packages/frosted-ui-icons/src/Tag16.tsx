import * as React from 'react';
import { IconProps } from './types';

export const Tag16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.13 0.75H8.96392C8.66688 0.75 8.382 0.868 8.17196 1.07804L1.32452 7.92548C0.956663 8.29334 0.75 8.79226 0.75 9.3125C0.75 9.83274 0.956663 10.3317 1.32452 10.6995L5.30048 14.6755C5.66834 15.0433 6.16726 15.25 6.6875 15.25C7.20774 15.25 7.70666 15.0433 8.07452 14.6755L14.922 7.82804C15.132 7.618 15.25 7.33312 15.25 7.03608V1.87C15.25 1.25144 14.7486 0.75 14.13 0.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="4" r="1" fill={color} />
    </svg>
  );
};

export default Tag16;
