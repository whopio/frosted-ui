import * as React from 'react';
import { IconProps } from './types';

export const ProfileX20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.6677 13.3333L15.001 15M15.001 15L13.3343 16.6666M15.001 15L13.3343 13.3333M15.001 15L16.6677 16.6666M9.878 11.0427C7.11285 11.0906 5.01819 12.7548 4.15305 15.094C3.81238 16.0151 4.59886 16.875 5.58096 16.875H10.2093M9.878 11.0427C9.91883 11.042 9.95983 11.0416 10.001 11.0416C10.4344 11.0416 10.8517 11.0811 11.251 11.1565M9.878 11.0427C9.33625 11.0521 8.8205 11.1235 8.33441 11.25M13.126 5.41663C13.126 7.14252 11.7268 8.54163 10.001 8.54163C8.27509 8.54163 6.87598 7.14252 6.87598 5.41663C6.87598 3.69073 8.27509 2.29163 10.001 2.29163C11.7268 2.29163 13.126 3.69073 13.126 5.41663Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileX20;
