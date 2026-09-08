import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBoldFilled16"
      {...props}
    >
      <path
        d="M7.093 9.12c.58.235 1.23.235 1.81 0l6.092-2.482v3.612c0 2.071-1.679 3.75-3.75 3.75H4.75C2.679 14 1 12.321 1 10.25V6.637l6.093 2.482zM9.75 2.25c0 1.516.844 2.835 2.087 3.514L8.148 7.267c-.096.039-.205.039-.301 0l-6.653-2.71C1.693 3.072 3.096 2 4.75 2h5.008c-.005.083-.008.166-.008.25zm4-2.25C14.993 0 16 1.007 16 2.25S14.993 4.5 13.75 4.5 11.5 3.493 11.5 2.25 12.507 0 13.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBoldFilled16.category = 'Communication';

export default MailNotificationBoldFilled16;
