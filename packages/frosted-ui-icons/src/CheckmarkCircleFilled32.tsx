import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM22.7803 11.4697C22.4874 11.1768 22.0126 11.1768 21.7197 11.4697L13.6201 19.5693L10.2803 16.2295C9.9874 15.9367 9.51261 15.9367 9.21973 16.2295C8.92685 16.5224 8.92689 16.9971 9.21973 17.29L13.0898 21.1602C13.2305 21.3008 13.4212 21.3799 13.6201 21.3799C13.819 21.3799 14.0098 21.3008 14.1504 21.1602L22.7803 12.5303C23.0732 12.2374 23.0732 11.7626 22.7803 11.4697Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled32.category = 'Checkmarks';

export default CheckmarkCircleFilled32;
