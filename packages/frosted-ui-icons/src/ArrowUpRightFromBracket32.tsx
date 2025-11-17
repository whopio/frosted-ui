import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 21.75L4 25.25C4 27.0449 5.45508 28.5 7.25 28.5L24.75 28.5C26.5449 28.5 28 27.0449 28 25.25V21.75C28 21.3358 28.3358 21 28.75 21C29.1642 21 29.5 21.3358 29.5 21.75V25.25C29.5 27.8734 27.3734 30 24.75 30L7.25 30C4.62665 30 2.5 27.8734 2.5 25.25L2.5 21.75C2.5 21.3358 2.83579 21 3.25 21C3.66421 21 4 21.3358 4 21.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M20.2075 2.23214C20.4935 1.93252 20.9682 1.92148 21.2679 2.20748L26.7679 7.45748C26.9161 7.59901 27 7.79504 27 8C27 8.20496 26.9161 8.401 26.7679 8.54252L21.2679 13.7925C20.9682 14.0785 20.4935 14.0675 20.2075 13.7679C19.9215 13.4682 19.9325 12.9935 20.2321 12.7075L24.3781 8.75H17.75C15.4028 8.75 13.5 10.6528 13.5 13V21.75C13.5 22.1642 13.1642 22.5 12.75 22.5C12.3358 22.5 12 22.1642 12 21.75V13C12 9.82436 14.5744 7.25 17.75 7.25H24.3781L20.2321 3.29252C19.9325 3.00651 19.9215 2.53177 20.2075 2.23214Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowUpRightFromBracket32;
