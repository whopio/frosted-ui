import * as React from 'react';
import { IconProps } from './types';

export const MailboxBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxBoldFilled20"
      {...props}
    >
      <path
        d="M11.295 1.205c.249-.19.572-.252.873-.168l3.6 1c.432.12.732.514.732.963 0 .449-.3.843-.732.964l-2.868.795v.543c.197.165.446.398.705.698H14c2.761 0 5 2.24 5 5v5.75c0 1.243-1.008 2.25-2.25 2.25H13v-8c0-1.959-.806-3.73-2.104-5h.004V2c0-.312.146-.606.395-.795zM6 6c2.761 0 5 2.238 5 5v7.996H3.25c-1.243 0-2.25-1.008-2.25-2.25V11c0-2.762 2.239-5 5-5zm-1 7.947c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H5z"
        fill={color}
      />
    </svg>
  );
};

MailboxBoldFilled20.category = 'Interface General';

export default MailboxBoldFilled20;
