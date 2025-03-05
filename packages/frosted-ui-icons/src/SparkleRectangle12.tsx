import * as React from 'react';
import { IconProps } from './types';

export const SparkleRectangle12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M5.25 2.75H1.99C1.30517 2.75.75 3.30517.75 3.99V10.01C.75 10.6948 1.30517 11.25 1.99 11.25H7.51C8.19483 11.25 8.75 10.6948 8.75 10.01V7.75M9.5 5.25C9.5 4.20507 8.79493 3.5 7.75 3.5 8.79493 3.5 9.5 2.79493 9.5 1.75 9.5 2.79493 10.2051 3.5 11.25 3.5 10.2051 3.5 9.5 4.20507 9.5 5.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkleRectangle12;
