import * as React from 'react';
import { IconProps } from './types';

export const InboxBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxBold20"
      {...props}
    >
      <path
        d="M13.774 1.4c1.917 0 3.566 1.355 3.938 3.234l1.155 5.841c.089.447.133.902.133 1.359v2.752c0 2.217-1.797 4.014-4.014 4.014H5.014C2.797 18.6 1 16.803 1 14.586v-2.752c0-.457.044-.912.133-1.359l1.155-5.84C2.66 2.754 4.31 1.4 6.226 1.4h7.548zM3 14.586c0 1.112.902 2.014 2.014 2.014h9.972c1.112 0 2.014-.902 2.014-2.014v-2.585h-3.517c-.377.894-1.333 2.363-3.488 2.363-2.154 0-3.11-1.47-3.487-2.364H3v2.586zM6.226 3.4c-.962 0-1.788.68-1.975 1.623L3.266 10h3.633c.648 0 1.14.423 1.34.921l.036.1.077.21c.209.51.654 1.132 1.643 1.132 1.13 0 1.552-.812 1.72-1.341l.037-.1c.201-.499.692-.922 1.34-.922h3.642l-.985-4.978C15.562 4.08 14.736 3.4 13.774 3.4H6.226z"
        fill={color}
      />
    </svg>
  );
};

InboxBold20.category = 'Interface General';

export default InboxBold20;
