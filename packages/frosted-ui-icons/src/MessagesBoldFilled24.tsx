import * as React from 'react';
import { IconProps } from './types';

export const MessagesBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesBoldFilled24"
      {...props}
    >
      <path
        d="M7.497 10c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5c-.877 0-1.716-.175-2.481-.491-.81.181-1.63.393-2.222.555-1.128.306-2.168-.734-1.861-1.862l.306-1.177c.084-.337.168-.692.247-1.045-.316-.766-.489-1.604-.489-2.48 0-3.59 2.91-6.5 6.5-6.5zM15 1c4.418 0 8 3.582 8 8 0 1.108-.229 2.166-.638 3.128.191.859.41 1.73.599 2.443l.195.724c.312 1.13-.732 2.17-1.86 1.86l-.724-.195c-.712-.19-1.582-.409-2.44-.6-.672.287-1.392.483-2.143.576.008-.144.011-.29.011-.436C16 11.806 12.194 8 7.5 8c-.147 0-.293.002-.438.01C7.55 4.059 10.918 1 15 1z"
        fill={color}
      />
    </svg>
  );
};

MessagesBoldFilled24.category = 'Communication';

export default MessagesBoldFilled24;
