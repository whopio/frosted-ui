import * as React from 'react';
import { IconProps } from './types';

export const WebcamOn12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M0.75 4.25C0.75 3.14543 1.64543 2.25 2.75 2.25H6.25C7.35457 2.25 8.25 3.14543 8.25 4.25V7.75C8.25 8.85457 7.35457 9.75 6.25 9.75H2.75C1.64543 9.75 0.75 8.85457 0.75 7.75V4.25Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M8.25 5L10.45 3.35C10.7796 3.10279 11.25 3.33798 11.25 3.75V8.25C11.25 8.66202 10.7796 8.89721 10.45 8.65L8.25 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

WebcamOn12.category = 'Interface General';

export default WebcamOn12;
