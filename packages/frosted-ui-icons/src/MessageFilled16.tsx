import * as React from 'react';
import { IconProps } from './types';

export const MessageFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C6.93424 15.5 5.92041 15.2739 5.00098 14.8721C4.25526 15.0369 3.49572 15.2263 2.8418 15.3975H2.84082C1.49368 15.7494 0.250025 14.5037 0.602539 13.1572C0.77365 12.504 0.961099 11.7428 1.12598 10.9951C0.725224 10.0765 0.5 9.06401 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9C5.55228 9 6 8.55228 6 8C6 7.44772 5.55228 7 5 7ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7Z"
        fill={color}
      />
    </svg>
  );
};

MessageFilled16.category = 'Communication';

export default MessageFilled16;
