import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.75 16.25C18.5784 16.25 19.25 16.9216 19.25 17.75C19.25 18.5784 18.5784 19.25 17.75 19.25H2.25C1.42157 19.25 0.75 18.5784 0.75 17.75C0.750001 16.9216 1.42157 16.25 2.25 16.25H17.75ZM10 0.75C10.8284 0.75 11.5 1.42157 11.5 2.25V10.3789L14.4395 7.43945C15.0252 6.85367 15.9748 6.85367 16.5605 7.43945C17.1463 8.02524 17.1463 8.97476 16.5605 9.56055L11.0605 15.0605C10.5115 15.6096 9.64286 15.6442 9.05371 15.1641L8.93945 15.0605L3.43945 9.56055C2.85367 8.97476 2.85367 8.02524 3.43945 7.43945C4.02524 6.85367 4.97476 6.85367 5.56055 7.43945L8.5 10.3789V2.25C8.5 1.42157 9.17157 0.75 10 0.75Z"
        fill={color}
      />
    </svg>
  );
};

DownloadBoldFilled20.category = 'Arrows';

export default DownloadBoldFilled20;
