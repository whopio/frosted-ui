import * as React from 'react';
import { IconProps } from './types';

export const SparkleRectangle32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M14.25 4.75H5.32C3.34834 4.75 1.75 6.34834 1.75 8.32V25.68C1.75 27.6517 3.34834 29.25 5.32 29.25H22.68C24.6517 29.25 26.25 27.6517 26.25 25.68V19.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 16.25C23.5 13.4551 19.5449 9.5 16.75 9.5C19.5449 9.5 23.5 6.04493 23.5 2.75C23.5 6.04493 26.9551 9.5 30.25 9.5C26.9551 9.5 23.5 13.4551 23.5 16.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkleRectangle32;
