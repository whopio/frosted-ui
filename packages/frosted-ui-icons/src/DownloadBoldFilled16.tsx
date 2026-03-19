import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 12.2504C14.5784 12.2504 15.25 12.9219 15.25 13.7504C15.2498 14.5786 14.5783 15.2504 13.75 15.2504H2.25C1.42173 15.2503 0.750215 14.5786 0.75 13.7504C0.75 12.922 1.42159 12.2504 2.25 12.2504H13.75ZM8 0.750366C8.82843 0.750366 9.5 1.42194 9.5 2.25037V6.62927L10.6895 5.43982C11.2752 4.85403 12.2248 4.85403 12.8105 5.43982C13.3961 6.02562 13.3963 6.97519 12.8105 7.56091L9.06055 11.3109C8.77926 11.5921 8.39774 11.7504 8 11.7504C7.65206 11.7504 7.31666 11.629 7.0498 11.4105L6.93945 11.3109L3.18945 7.56091C2.60373 6.97519 2.60385 6.02562 3.18945 5.43982C3.77524 4.85403 4.72476 4.85403 5.31055 5.43982L6.5 6.62927V2.25037C6.5 1.42194 7.17157 0.750366 8 0.750366Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DownloadBoldFilled16.category = 'Arrows';

export default DownloadBoldFilled16;
