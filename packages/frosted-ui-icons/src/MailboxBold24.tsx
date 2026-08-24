import * as React from 'react';
import { IconProps } from './types';

export const MailboxBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxBold24"
      {...props}
    >
      <path
        d="M17 8c3.314 0 6 2.686 6 6v6.249c0 1.518-1.231 2.75-2.75 2.75H3.75c-1.519 0-2.75-1.232-2.75-2.75v-6.342c0-.035.001-.069.005-.103C1.108 10.581 3.752 8 7 8h5.3V2c0-.338.17-.653.453-.837.282-.185.638-.214.947-.08l4.97 2.176c.365.159.6.518.6.916 0 .397-.235.756-.6.916L14.3 7V8H17zM7 10c-2.21 0-4 1.79-4 4v6.249c0 .414.336.75.75.75H11v-7c0-2.208-1.79-4-4-4zm4.47 0c.951 1.061 1.53 2.463 1.53 4v6.999h7.25c.414 0 .75-.336.75-.75v-6.25c0-2.208-1.79-4-4-4h-5.53zM8.5 17.25c.552 0 1 .448 1 1s-.448 1-1 1h-3c-.552 0-1-.448-1-1s.448-1 1-1h3zm5.8-12.43l1.475-.646-1.475-.646v1.291z"
        fill={color}
      />
    </svg>
  );
};

MailboxBold24.category = 'Interface General';

export default MailboxBold24;
