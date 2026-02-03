import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_7233_581)">
        <path
          d="M8.29102 1.53491C9.75178 0.290963 11.9997 1.32916 12 3.2478V16.7517C11.9999 18.6706 9.75185 19.7088 8.29102 18.4646L4.64453 15.3582C4.37325 15.1271 4.02821 14.9998 3.67188 14.9998H2.75C1.23122 14.9998 0 13.7685 0 12.2498V7.74976C0.000155222 6.2311 1.23131 4.99976 2.75 4.99976H3.67188C4.02826 4.99968 4.37323 4.87247 4.64453 4.64136L8.29102 1.53491ZM19.25 9.24976C19.6641 9.24976 19.9999 9.58565 20 9.99976C20 10.414 19.6642 10.7498 19.25 10.7498H15.25C14.8358 10.7498 14.5 10.414 14.5 9.99976C14.5001 9.58565 14.8359 9.24976 15.25 9.24976H19.25Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_7233_581">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

VolumeMinusFilled20.category = 'Sound & Music';

export default VolumeMinusFilled20;
