import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket32 = ({
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
        d="M2.75 18.75L2.75 25.68C2.75 27.6517 4.34834 29.25 6.32 29.25L24.68 29.25C26.6517 29.25 28.25 27.6517 28.25 25.68L28.25 18.75M16 21.25L16 2.75M16 2.75L8.75 10.25M16 2.75L23.25 10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpFromBracket32;
