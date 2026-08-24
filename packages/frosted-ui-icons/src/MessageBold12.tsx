import * as React from 'react';
import { IconProps } from './types';

export const MessageBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6c-.799 0-1.562-.159-2.26-.443-.513.115-1.029.242-1.477.36-1.313.345-2.525-.864-2.181-2.178h.001c.117-.448.244-.966.36-1.48C.157 7.562 0 6.799 0 6c0-3.314 2.687-6 6-6zm0 2C3.79 2 2 3.791 2 6c0 .62.14 1.205.39 1.727.097.2.124.429.077.648-.111.516-.24 1.044-.362 1.519.474-.121 1.002-.25 1.52-.362l.165-.021c.166-.008.332.025.483.097C4.795 9.858 5.38 10 6 10c2.21 0 4-1.79 4-4S8.21 2 6 2zM4.5 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

MessageBold12.category = 'Communication';

export default MessageBold12;
