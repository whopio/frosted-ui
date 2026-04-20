import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.25 16.2857C18.25 11.5714 17.1071 7.25 9.25 7.25V3.44145C9.25 3.17897 8.93673 3.04306 8.74505 3.22237L1.96838 9.56184C1.71491 9.79896 1.71491 10.201 1.96838 10.4382L8.74505 16.7776C8.93673 16.9569 9.25 16.821 9.25 16.5585V12.75C12.3929 12.75 15.5 13.1429 18.25 16.2857Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyFilled20.category = 'Arrows';

export default ReplyFilled20;
