import * as React from 'react';
import { IconProps } from './types';

export const MailboxBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxBoldFilled32"
      {...props}
    >
      <path
        d="M9 10c4.418 0 8 3.582 8 8v13H4.5C2.567 31 1 29.433 1 27.5V18c0-4.418 3.582-8 8-8zm6.453-8.836c.282-.185.638-.215.947-.08l6.91 3.023c.364.16.599.519.6.916 0 .397-.236.758-.6.917L17 8.7V9l.164.136c.209.177.582.506.917.864H23c4.418 0 8 3.582 8 8v9.5c0 1.933-1.567 3.5-3.5 3.5H19V18c0-3.27-1.57-6.175-3.999-8H15V2c0-.337.17-.652.453-.836zM6.75 24c-.552 0-1 .448-1 1 0 .553.448 1 1 1h4.5c.552 0 1-.447 1-1 0-.552-.448-1-1-1h-4.5z"
        fill={color}
      />
    </svg>
  );
};

MailboxBoldFilled32.category = 'Interface General';

export default MailboxBoldFilled32;
