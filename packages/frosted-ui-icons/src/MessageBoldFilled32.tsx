import * as React from 'react';
import { IconProps } from './types';

export const MessageBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBoldFilled32"
      {...props}
    >
      <path
        d="M16.5.505c8.335.211 15.026 7.034 15.026 15.42 0 8.385-6.692 15.207-15.026 15.419l-.398.005c-2.265 0-4.419-.49-6.359-1.369-2.09.458-4.241 1.01-5.884 1.452-1.972.53-3.797-1.297-3.267-3.268.442-1.644.992-3.798 1.45-5.89-.877-1.938-1.365-4.088-1.365-6.35C.677 7.407 7.583.5 16.102.5l.398.005zM9.5 14c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2 1.105 0 2-.895 2-2s-.895-2-2-2zm6.5 0c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2 1.105 0 2-.895 2-2s-.895-2-2-2zm6.5 0c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2 1.105 0 2-.895 2-2 0-1.104-.895-2-2-2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessageBoldFilled32.category = 'Communication';

export default MessageBoldFilled32;
