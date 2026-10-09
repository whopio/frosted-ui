import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBold12"
      {...props}
    >
      <path
        d="M10 6c0-2.21-1.79-4-4-4S2 3.791 2 6c0 .62.14 1.205.39 1.727.097.2.124.429.077.648-.111.516-.24 1.044-.362 1.519.474-.121 1.002-.25 1.52-.362l.165-.021c.166-.008.332.025.483.097C4.795 9.858 5.38 10 6 10c2.21 0 4-1.79 4-4zm2 0c0 3.314-2.686 6-6 6-.799 0-1.562-.159-2.26-.443-.513.115-1.029.242-1.477.36-1.313.345-2.525-.864-2.181-2.178h.001c.117-.448.244-.966.36-1.48C.157 7.562 0 6.799 0 6c0-3.314 2.687-6 6-6 3.314 0 6 2.686 6 6z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBold12.category = 'Communication';

export default MessageBlankBold12;
