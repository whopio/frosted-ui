import * as React from 'react';
import { IconProps } from './types';

export const MailFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5 4C2.79086 4 1 5.79086 1 8V8.05003L13.4408 16.4657C14.1964 16.9768 15.0877 17.25 16 17.25C16.9123 17.25 17.8036 16.9768 18.5592 16.4657L31 8.05003V8C31 5.79086 29.2091 4 27 4H5ZM31 10.4647L19.6798 18.1223C18.5934 18.8572 17.3117 19.25 16 19.25C14.6883 19.25 13.4066 18.8572 12.3202 18.1223L1 10.4647V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V10.4647Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MailFilled32;
