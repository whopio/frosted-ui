import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBox24 = ({
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
        d="M2.75 15.75V8.25C2.75 5.21243 5.21243 2.75 8.25 2.75H15.75C18.7876 2.75 21.25 5.21243 21.25 8.25V15.75C21.25 18.7876 18.7876 21.25 15.75 21.25H8.25C5.21243 21.25 2.75 18.7876 2.75 15.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 7.75V16.2499M16.25 7.75L11.75 12L16.25 16.2499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftToLineInBox24;
