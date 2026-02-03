import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_1057_1130)">
        <path
          d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V9.25H14C14.4142 9.25 14.75 9.58579 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75H10.75V14C10.75 14.4142 10.4142 14.75 10 14.75C9.58579 14.75 9.25 14.4142 9.25 14V10.75H6C5.5858 10.75 5.25003 10.4142 5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H9.25V6C9.25 5.58579 9.58579 5.25 10 5.25Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1057_1130">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusCircle20;
