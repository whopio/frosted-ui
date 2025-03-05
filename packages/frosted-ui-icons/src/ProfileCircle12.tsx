import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g
        stroke={color}
        clipPath="url(#clip0_882_1424)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 11.25C8.89949 11.25 11.25 8.89949 11.25 6C11.25 3.10051 8.89949 0.75 6 0.75C3.10051 0.75 0.75 3.10051 0.75 6C0.75 8.89949 3.10051 11.25 6 11.25ZM6 11.25C7.29715 11.25 8.48445 10.7796 9.40055 10C8.48445 9.22044 7.29717 8.75 6.00002 8.75C4.70286 8.75 3.51559 9.22044 2.59949 10C3.51559 10.7796 4.70285 11.25 6 11.25Z" />
        <path d="M7.75 5C7.75 5.9665 6.9665 6.75 6 6.75C5.0335 6.75 4.25 5.9665 4.25 5C4.25 4.0335 5.0335 3.25 6 3.25C6.9665 3.25 7.75 4.0335 7.75 5Z" />
      </g>
      <defs>
        <clipPath id="clip0_882_1424">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileCircle12;
