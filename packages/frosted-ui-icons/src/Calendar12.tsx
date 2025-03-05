import * as React from 'react';
import { IconProps } from './types';

export const Calendar12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.25 5.75H10.75M3.75 0.75V2.75M8.25 0.75V2.75M2.5 11.25H9.5C10.1904 11.25 10.75 10.6904 10.75 10V4C10.75 3.30964 10.1904 2.75 9.5 2.75H2.5C1.80964 2.75 1.25 3.30964 1.25 4V10C1.25 10.6904 1.80964 11.25 2.5 11.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar12;
