import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M.75 9.75L.75 12.75C.75 14.1307 1.86929 15.25 3.25 15.25L12.75 15.25C14.1307 15.25 15.25 14.1307 15.25 12.75L15.25 9.75M8 9.25L8 .75M8 .75L3.75 5.25M8 .75L12.25 5.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpFromBracket16;
