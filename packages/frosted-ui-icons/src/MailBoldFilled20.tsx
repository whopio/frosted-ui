import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBoldFilled20"
      {...props}
    >
      <path
        d="M18.998 13c0 2.761-2.239 5-5 5H6c-2.761 0-5-2.239-5-5V7.81l7.911 3.34c.696.294 1.482.294 2.178 0l7.909-3.34V13zm-5-11c2.316 0 4.263 1.574 4.831 3.71l-8.518 3.598c-.198.084-.424.084-.623 0L1.168 5.71C1.737 3.574 3.685 2 6 2h7.998z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled20.category = 'Communication';

export default MailBoldFilled20;
