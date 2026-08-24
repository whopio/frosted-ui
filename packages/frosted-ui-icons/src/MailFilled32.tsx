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
        d="M14.577 17.102c.911.374 1.933.374 2.844 0l14.574-5.971V21.75c0 4.004-3.246 7.25-7.25 7.25H7.25C3.246 29 0 25.754 0 21.75V11.129l14.577 5.973zM24.745 3c3.759 0 6.85 2.86 7.214 6.523l-15.107 6.192c-.547.224-1.16.224-1.707 0L.036 9.522C.4 5.86 3.492 3 7.25 3h17.495z"
        fill={color}
      />
    </svg>
  );
};

MailFilled32.category = 'Communication';

export default MailFilled32;
