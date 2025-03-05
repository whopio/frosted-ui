import * as React from 'react';
import { IconProps } from './types';

export const SparkleRectangle20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M8 3.75H3.86C2.69468 3.75 1.75 4.69468 1.75 5.86V16.14C1.75 17.3053 2.69468 18.25 3.86 18.25H14.14C15.3053 18.25 16.25 17.3053 16.25 16.14V12M14.5 9.25C14.5 7.95507 12.0449 5.5 10.75 5.5 12.0449 5.5 14.5 3.54493 14.5 1.75 14.5 3.54493 16.4551 5.5 18.25 5.5 16.4551 5.5 14.5 7.95507 14.5 9.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkleRectangle20;
