import * as React from 'react';
import { IconProps } from './types';

export const MailboxBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailboxBold32"
      {...props}
    >
      <path
        d="M23 10c4.418 0 8 3.582 8 8v9.5c0 1.933-1.567 3.5-3.5 3.5h-23C2.567 31 1 29.433 1 27.5V18c0-4.418 3.582-8 8-8h6V2c0-.337.17-.652.453-.837.282-.184.638-.214.947-.079l6.91 3.023c.364.159.599.519.6.916 0 .397-.236.757-.6.917L17 8.7V10h6zM9 12c-3.314 0-6 2.687-6 6v9.5c0 .828.672 1.5 1.5 1.5H15V18c0-3.313-2.686-6-6-6zm5.29 0c1.66 1.466 2.71 3.61 2.71 6v11h10.5c.828 0 1.5-.672 1.5-1.5V18c0-3.313-2.686-6-6-6h-8.71zm-3.04 12c.552 0 1 .448 1 1s-.448 1-1 1h-4.5c-.552 0-1-.448-1-1s.448-1 1-1h4.5zM17 6.516l3.413-1.493L17 3.529v2.987z"
        fill={color}
      />
    </svg>
  );
};

MailboxBold32.category = 'Interface General';

export default MailboxBold32;
