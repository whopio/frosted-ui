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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14 2C16.7614 2 19 4.23858 19 7V13C19 15.7614 16.7614 18 14 18H6C3.23858 18 1 15.7614 1 13V7C1 4.23858 3.23858 2 6 2H14ZM11.1914 11.0703C10.437 11.4249 9.56301 11.4249 8.80859 11.0703L3 8.33984V13C3 14.6569 4.34315 16 6 16H14C15.6569 16 17 14.6569 17 13V8.33984L11.1914 11.0703ZM6 4C4.62632 4 3.46997 4.92375 3.11426 6.18359L9.66016 9.25977C9.87558 9.36093 10.1244 9.36093 10.3398 9.25977L16.8848 6.18359C16.529 4.92388 15.3736 4 14 4H6Z"
        fill={color}
      />
    </svg>
  );
};

MailBold20.category = 'Communication';

export default MailBold20;
