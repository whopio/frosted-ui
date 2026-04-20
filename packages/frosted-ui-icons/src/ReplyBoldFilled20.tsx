import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 16.2857C18 11.5714 16.25 7 9 7V3.47426C9 3.20699 8.67686 3.07314 8.48787 3.26213L2.17426 9.57574C1.93995 9.81005 1.93995 10.1899 2.17426 10.4243L8.48787 16.7379C8.67686 16.9269 9 16.793 9 16.5257V13C12.1429 13 15.25 13.1429 18 16.2857Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBoldFilled20.category = 'Arrows';

export default ReplyBoldFilled20;
