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
        d="M16.108.5c8.514 0 15.416 6.902 15.416 15.415l-.005.398c-.21 8.33-7.03 15.018-15.41 15.018-2.296 0-4.475-.504-6.434-1.404-2.179.474-4.43 1.052-6.131 1.51-1.786.48-3.441-1.177-2.96-2.962.459-1.703 1.034-3.955 1.509-6.134-.84-1.83-1.334-3.852-1.395-5.98l-.007-.446C.691 7.401 7.594.5 16.108.5zM9.5 14.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S11 16.828 11 16s-.672-1.5-1.5-1.5zm6.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm6.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S24 16.828 24 16s-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

MessageFilled32.category = 'Communication';

export default MessageFilled32;
