import * as React from 'react';
import { IconProps } from './types';

export const MessageFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageFilled32"
      {...props}
    >
      <path
        d="M16.108.5c8.514 0 15.415 6.902 15.416 15.415l-.005.398c-.211 8.33-7.03 15.018-15.411 15.018-2.295 0-4.475-.503-6.434-1.404-2.179.474-4.43 1.052-6.13 1.51-1.786.48-3.442-1.177-2.96-2.962.458-1.703 1.034-3.955 1.508-6.134-.84-1.83-1.334-3.852-1.394-5.98l-.007-.446C.69 7.402 7.594.5 16.108.5zm-6.609 14c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5zm6.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5zm6.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessageFilled32.category = 'Communication';

export default MessageFilled32;
