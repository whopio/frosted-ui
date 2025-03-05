import * as React from 'react';
import { IconProps } from './types';

export const Calendar20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 7.75H18.25M6.75 1.75V3.75M13.25 1.75V3.75M4.32 18.25H15.68C17.0994 18.25 18.25 17.0994 18.25 15.68V6.32C18.25 4.90063 17.0994 3.75 15.68 3.75H4.32C2.90063 3.75 1.75 4.90063 1.75 6.32V15.68C1.75 17.0994 2.90063 18.25 4.32 18.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar20;
