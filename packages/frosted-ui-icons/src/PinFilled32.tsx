import * as React from 'react';
import { IconProps } from './types';

export const PinFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.25 1C22.3211 1 24 2.67893 24 4.75V12.2949C24 12.6506 24.078 13.0025 24.2275 13.3252L26.7061 18.6729C27.8577 21.158 26.0427 23.9997 23.3037 24H16.75V30.25C16.75 30.6642 16.4142 31 16 31C15.586 30.9998 15.25 30.6641 15.25 30.25V24H8.69629C5.9576 23.9994 4.14248 21.1579 5.29395 18.6729L7.77246 13.3252C7.92202 13.0025 7.99996 12.6506 8 12.2949V4.75C8 2.67907 9.67913 1.00023 11.75 1H20.25Z"
        fill={color}
      />
    </svg>
  );
};

export default PinFilled32;
