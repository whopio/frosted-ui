import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM14.2803 7.21973C13.9874 6.92683 13.5126 6.92683 13.2197 7.21973L8.5 11.9395L6.78027 10.2197C6.48738 9.92683 6.01262 9.92683 5.71973 10.2197C5.42683 10.5126 5.42683 10.9874 5.71973 11.2803L7.96973 13.5303C8.11038 13.6709 8.30109 13.75 8.5 13.75C8.69891 13.75 8.88962 13.6709 9.03027 13.5303L14.2803 8.28027C14.5732 7.98738 14.5732 7.51262 14.2803 7.21973Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled20.category = 'Checkmarks';

export default CheckmarkCircleFilled20;
