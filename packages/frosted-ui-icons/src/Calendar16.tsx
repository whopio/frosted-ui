import * as React from 'react';
import { IconProps } from './types';

export const Calendar16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.5 7.22222H14.5M4.62 1V3.07407M11.38 1V3.07407M4.1 15H11.9C13.3359 15 14.5 13.8393 14.5 12.4074V5.66667C14.5 4.23482 13.3359 3.07407 11.9 3.07407H4.1C2.66406 3.07407 1.5 4.23482 1.5 5.66667V12.4074C1.5 13.8393 2.66406 15 4.1 15Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar16;
