import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM11.2803 5.71973C10.9874 5.42683 10.5126 5.42683 10.2197 5.71973L7 8.93945L5.78027 7.71973C5.48738 7.42683 5.01262 7.42683 4.71973 7.71973C4.42683 8.01262 4.42683 8.48738 4.71973 8.78027L6.46973 10.5303C6.76262 10.8232 7.23738 10.8232 7.53027 10.5303L11.2803 6.78027C11.5732 6.48738 11.5732 6.01262 11.2803 5.71973Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled16.category = 'Checkmarks';

export default CheckmarkCircleFilled16;
