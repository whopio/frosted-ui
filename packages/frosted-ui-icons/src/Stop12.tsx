import * as React from 'react';
import { IconProps } from './types';

export const Stop12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.75 0C10.0972 5.36889e-09 12 1.90279 12 4.25V7.75C12 10.0972 10.0972 12 7.75 12H4.25C1.90279 12 0 10.0972 0 7.75V4.25C0 1.90279 1.90279 0 4.25 0H7.75ZM4.25 1.5C2.73122 1.5 1.5 2.73122 1.5 4.25V7.75C1.5 9.26878 2.73122 10.5 4.25 10.5H7.75C9.26878 10.5 10.5 9.26878 10.5 7.75V4.25C10.5 2.73122 9.26878 1.5 7.75 1.5H4.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Stop12;
