import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBoldFilled20"
      {...props}
    >
      <path
        d="M18.998 13c0 2.761-2.239 5-5 5H6c-2.761 0-5-2.239-5-5V7.81l7.911 3.34c.696.294 1.482.294 2.178 0l7.909-3.34V13zM12.56 2c-.04.244-.06.495-.06.75 0 1.982 1.214 3.68 2.94 4.392l-5.128 2.166c-.2.084-.425.084-.624 0L1.168 5.71C1.737 3.574 3.685 2 6 2h6.56zm4.69-2C18.769 0 20 1.231 20 2.75S18.769 5.5 17.25 5.5 14.5 4.269 14.5 2.75 15.731 0 17.25 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBoldFilled20.category = 'Communication';

export default MailNotificationBoldFilled20;
