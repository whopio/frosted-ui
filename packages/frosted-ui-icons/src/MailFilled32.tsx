import * as React from 'react';
import { IconProps } from './types';

export const MailFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailFilled32"
      {...props}
    >
      <path
        d="M14.577 17.102c.911.374 1.933.374 2.844 0l13.574-5.562v10.21c0 4.004-3.246 7.25-7.25 7.25H8.25C4.246 29 1 25.754 1 21.75V11.54l13.577 5.563zM23.745 3c3.894 0 7.07 3.07 7.241 6.922l-14.134 5.793c-.547.224-1.16.224-1.707 0L1.008 9.92C1.18 6.07 4.356 3 8.25 3h15.495z"
        fill={color}
      />
    </svg>
  );
};

MailFilled32.category = 'Communication';

export default MailFilled32;
