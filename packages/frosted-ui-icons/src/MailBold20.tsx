import * as React from 'react';
import { IconProps } from './types';

export const MailBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBold20"
      {...props}
    >
      <path
        d="M13.998 2c2.761 0 5 2.239 5 5v6c0 2.761-2.239 5-5 5H6c-2.761 0-5-2.239-5-5V7c0-2.761 2.239-5 5-5h7.998zm-2.92 9.157c-.69.289-1.468.289-2.158 0L3 8.684V13c0 1.657 1.343 3 3 3h7.998c1.657 0 3-1.343 3-3V8.684l-5.92 2.473zM6 4C4.503 4 3.261 5.097 3.036 6.531L9.69 9.313c.198.082.42.082.618 0L16.96 6.53c-.225-1.434-1.465-2.53-2.962-2.531H6z"
        fill={color}
      />
    </svg>
  );
};

MailBold20.category = 'Communication';

export default MailBold20;
