import * as React from 'react';
import { IconProps } from './types';

export const MailFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.998 10.5C15.998 12.433 14.431 14 12.498 14H3.5C1.567 14 0 12.433 0 10.5V6.18555L7.23828 8.92285C7.7281 9.108 8.26895 9.10796 8.75879 8.92285L15.998 6.18555V10.5ZM12.498 2C14.1285 2.00003 15.4978 3.11506 15.8867 4.62402L8.22852 7.51953C8.08041 7.57551 7.91666 7.57552 7.76855 7.51953L0.110352 4.62402C0.499215 3.11493 1.86948 2 3.5 2H12.498Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MailFilled16.category = 'Communication';

export default MailFilled16;
