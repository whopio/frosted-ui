import * as React from 'react';
import { IconProps } from './types';

export const UploadBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.75 16.25C18.5784 16.25 19.25 16.9216 19.25 17.75C19.25 18.5784 18.5784 19.25 17.75 19.25H2.25C1.42157 19.25 0.75 18.5784 0.75 17.75C0.75003 16.9216 1.42159 16.25 2.25 16.25H17.75ZM9.05371 1.08594C9.64285 0.605852 10.5115 0.640463 11.0605 1.18945L16.5605 6.68945C17.1463 7.27523 17.1463 8.22476 16.5605 8.81055C15.9748 9.39633 15.0252 9.39633 14.4395 8.81055L11.5 5.87109V14C11.5 14.8284 10.8284 15.5 10 15.5C9.17157 15.5 8.5 14.8284 8.5 14V5.87109L5.56055 8.81055C4.97476 9.39633 4.02524 9.39633 3.43945 8.81055C2.85369 8.22476 2.85368 7.27523 3.43945 6.68945L8.93945 1.18945L9.05371 1.08594Z"
        fill={color}
      />
    </svg>
  );
};

UploadBoldFilled20.category = 'Arrows';

export default UploadBoldFilled20;
