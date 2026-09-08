import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBoldFilled16"
      {...props}
    >
      <path
        d="M7.093 9.12c.58.235 1.23.235 1.81 0l6.092-2.482v3.612c0 2.071-1.679 3.75-3.75 3.75H4.75C2.679 14 1 12.321 1 10.25V6.637l6.093 2.482zM11.245 2C12.9 2 14.302 3.071 14.8 4.558L8.148 7.267c-.096.039-.205.039-.301 0l-6.653-2.71C1.693 3.072 3.096 2 4.75 2h6.495z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled16.category = 'Communication';

export default MailBoldFilled16;
