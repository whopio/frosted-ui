import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlankFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M8.29102 1.53491C9.75178 0.290963 11.9997 1.32916 12 3.2478V16.7517C11.9999 18.6706 9.75185 19.7088 8.29102 18.4646L4.64453 15.3582C4.37325 15.1271 4.02821 14.9998 3.67188 14.9998H2.75C1.23122 14.9998 0 13.7685 0 12.2498V7.74976C0.000155222 6.2311 1.23131 4.99976 2.75 4.99976H3.67188C4.02826 4.99968 4.37323 4.87247 4.64453 4.64136L8.29102 1.53491Z"
        fill={color}
      />
    </svg>
  );
};

export default VolumeBlankFilled20;
