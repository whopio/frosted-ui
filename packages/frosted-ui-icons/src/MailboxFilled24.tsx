import * as React from 'react';
import { IconProps } from './types';

export const MailboxFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxFilled24"
      {...props}
    >
      <path
        d="M11.51 1.122c.212-.138.479-.16.71-.06l4.971 2.176c.273.12.45.39.45.687 0 .298-.177.567-.45.687L12.67 6.589v.613c.18.121.488.365.85.798h3.731c3.175 0 5.75 2.575 5.75 5.75v6.75c0 1.38-1.12 2.5-2.5 2.5H14v-9.25c0-2.342-1.112-4.424-2.836-5.75h.006V1.75c0-.253.128-.49.34-.628zM6.75 8c3.176 0 5.75 2.575 5.75 5.75v9.248h-9c-1.38 0-2.5-1.12-2.5-2.5V13.75C1 10.575 3.574 8 6.75 8zM5.5 17.5c-.414 0-.75.336-.75.75s.336.75.75.75H8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.5z"
        fill={color}
      />
    </svg>
  );
};

MailboxFilled24.category = 'Interface General';

export default MailboxFilled24;
