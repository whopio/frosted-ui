import * as React from 'react';
import { IconProps } from './types';

export const Bell24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.25 19.25V20C15.25 21.7949 13.7949 23.25 12 23.25C10.2051 23.25 8.74999 21.7949 8.74999 20V19.25M20.25 10V15.7654C20.25 16.4648 20.4456 17.1502 20.8146 17.7443L21.1711 18.3181C21.4235 18.7245 21.1313 19.25 20.6529 19.25H3.34705C2.86868 19.25 2.57647 18.7245 2.8289 18.3181L3.18539 17.7443C3.55443 17.1502 3.74999 16.4648 3.74999 15.7654V10C3.74999 5.44365 7.44364 1.75 12 1.75C16.5563 1.75 20.25 5.44365 20.25 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bell24;
