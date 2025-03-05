import * as React from 'react';
import { IconProps } from './types';

export const MessagesQuestion20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.3749 11.875H16.0434C16.9638 11.875 17.71 11.1288 17.71 10.2083V4.79167C17.71 3.87119 16.9638 3.125 16.0434 3.125H7.50167C6.58119 3.125 5.835 3.87119 5.835 4.79167V6.45833M12.71 6.45833H3.96C3.03953 6.45833 2.29333 7.20453 2.29333 8.125V13.5417C2.29333 14.4622 3.03953 15.2083 3.96 15.2083H5.00167V17.2917L8.75171 15.2083H12.71C13.6305 15.2083 14.3767 14.4622 14.3767 13.5417V8.125C14.3767 7.20453 13.6305 6.45833 12.71 6.45833Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29773 11.4855C8.36948 11.0082 8.63653 10.7504 8.90422 10.5685C9.16598 10.3905 9.42781 10.1595 9.42781 9.73178C9.42781 9.14145 8.95417 8.66333 8.36948 8.66333C7.78472 8.66333 7.31116 9.14145 7.31116 9.73178"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.75305 13.1342C7.75305 13.4264 7.98998 13.6633 8.28221 13.6633C8.57445 13.6633 8.81138 13.4264 8.81138 13.1342C8.81138 12.8419 8.57445 12.605 8.28221 12.605C7.98998 12.605 7.75305 12.8419 7.75305 13.1342Z"
        fill={color}
        stroke={color}
        strokeWidth=".5"
      />
    </svg>
  );
};

export default MessagesQuestion20;
