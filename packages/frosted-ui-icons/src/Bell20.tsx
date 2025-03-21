import * as React from 'react';
import { IconProps } from './types';

export const Bell20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.25 15.25V16C12.25 17.2426 11.2426 18.25 9.99999 18.25C8.75735 18.25 7.74999 17.2426 7.74999 16V15.25M16.25 8V12.6452C16.25 13.0924 16.3998 13.5267 16.6756 13.8787L17.1673 14.5063C17.4039 14.8082 17.1888 15.25 16.8052 15.25H3.19474C2.8112 15.25 2.5961 14.8082 2.83264 14.5063L3.32436 13.8787C3.60014 13.5267 3.74999 13.0924 3.74999 12.6452V8C3.74999 4.54822 6.54821 1.75 9.99999 1.75C13.4518 1.75 16.25 4.54822 16.25 8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bell20;
