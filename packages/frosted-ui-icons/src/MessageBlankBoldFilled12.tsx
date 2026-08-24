import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankBoldFilled12"
      {...props}
    >
      <path
        d="M12 6c0 3.314-2.686 6-6 6-.799 0-1.562-.159-2.26-.443-.513.115-1.029.242-1.477.36-1.313.345-2.525-.864-2.181-2.178h.001c.117-.448.244-.966.36-1.48C.157 7.562 0 6.799 0 6c0-3.314 2.687-6 6-6 3.314 0 6 2.686 6 6z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankBoldFilled12.category = 'Communication';

export default MessageBlankBoldFilled12;
