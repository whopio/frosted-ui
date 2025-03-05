import * as React from 'react';
import { IconProps } from './types';

export const Bell16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.25 12.25V13C10.25 14.2426 9.24263 15.25 7.99999 15.25C6.75735 15.25 5.74999 14.2426 5.74999 13V12.25M13.25 6V9.68619C13.25 10.1068 13.391 10.5153 13.6504 10.8464L14.1673 11.5063C14.4039 11.8082 14.1888 12.25 13.8052 12.25H2.19474C1.8112 12.25 1.5961 11.8082 1.83264 11.5063L2.34962 10.8464C2.60903 10.5153 2.74999 10.1068 2.74999 9.68619V6C2.74999 3.10051 5.1005 0.75 7.99999 0.75C10.8995 0.75 13.25 3.1005 13.25 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bell16;
