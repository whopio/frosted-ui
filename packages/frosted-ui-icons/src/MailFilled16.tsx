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
      data-fui-icon="MailFilled16"
      {...props}
    >
      <path
        d="M15.998 10.5c0 1.933-1.567 3.5-3.5 3.5H3.5C1.567 14 0 12.433 0 10.5V6.186l7.238 2.737c.49.185 1.03.185 1.52 0l7.24-2.737V10.5zm-3.5-8.5c1.63 0 3 1.115 3.389 2.624L8.229 7.52c-.149.056-.312.056-.46 0L.11 4.624C.5 3.114 1.87 2 3.5 2h8.998z"
        fill={color}
      />
    </svg>
  );
};

MailFilled16.category = 'Communication';

export default MailFilled16;
