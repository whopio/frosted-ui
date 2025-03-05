import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75356 15.25H20.375C21.4105 15.25 22.25 14.4105 22.25 13.375V4.75M1.75356 15.25L6.25 11M1.75356 15.25L6.25 19.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownAngleLeft24;
