import * as React from 'react';
import { IconProps } from './types';

export const MessagesBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesBoldFilled32"
      {...props}
    >
      <path
        d="M9.697 13.6c4.804 0 8.7 3.895 8.7 8.7S14.5 31 9.697 31c-1.219 0-2.379-.254-3.433-.708-1.183.263-2.392.575-3.257.81-1.281.349-2.462-.835-2.114-2.114l.207-.774c.195-.746.412-1.621.603-2.483-.453-1.054-.707-2.214-.707-3.43 0-4.805 3.896-8.7 8.7-8.701zM20.2 1C26.165 1 31 5.836 31 11.8l-.004.312c-.04 1.43-.36 2.792-.906 4.033.275 1.248.594 2.522.868 3.558l.275 1.016c.352 1.28-.83 2.467-2.113 2.113-1.128-.31-2.874-.77-4.572-1.144-1.189.523-2.49.838-3.855.9.002-.096.007-.192.007-.288 0-6.075-4.925-11-11-11-.096 0-.192.005-.288.007C9.67 5.572 14.402 1.001 20.2 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessagesBoldFilled32.category = 'Communication';

export default MessagesBoldFilled32;
