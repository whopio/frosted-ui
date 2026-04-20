import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14 12.7619C14 9.19047 13.3432 6 8 6V3.16362C8 2.90547 7.69561 2.76787 7.50181 2.93841L2.17654 7.62464C1.95029 7.82374 1.95029 8.17625 2.17654 8.37535L7.50181 13.0616C7.69561 13.2321 8 13.0945 8 12.8364V10C10.381 10 11.9167 10.3809 14 12.7619Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBoldFilled16.category = 'Arrows';

export default ReplyBoldFilled16;
