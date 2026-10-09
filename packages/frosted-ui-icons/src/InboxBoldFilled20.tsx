import * as React from 'react';
import { IconProps } from './types';

export const InboxBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxBoldFilled20"
      {...props}
    >
      <path
        d="M13.774 1.4c1.917 0 3.566 1.355 3.938 3.234l1.155 5.841c.089.447.133.902.133 1.359v2.752c0 2.217-1.797 4.014-4.014 4.014H5.014C2.797 18.6 1 16.803 1 14.586v-2.752c0-.457.044-.912.133-1.359l1.155-5.84C2.66 2.754 4.31 1.4 6.226 1.4h7.548zm-7.548 2c-.962 0-1.788.68-1.975 1.623l-.986 4.979L3.29 10H6.9c.647 0 1.138.424 1.34.922l.035.1.077.21c.209.51.654 1.132 1.643 1.132 1.13 0 1.552-.812 1.72-1.341l.037-.1c.201-.499.692-.922 1.34-.922h3.642l-.985-4.978C15.562 4.08 14.736 3.4 13.774 3.4H6.226z"
        fill={color}
      />
    </svg>
  );
};

InboxBoldFilled20.category = 'Interface General';

export default InboxBoldFilled20;
