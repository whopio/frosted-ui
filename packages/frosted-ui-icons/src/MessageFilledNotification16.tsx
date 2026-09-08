import * as React from 'react';
import { IconProps } from './types';

export const MessageFilledNotification16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageFilledNotification16"
      {...props}
    >
      <path
        d="M8 0c.96 0 1.88.169 2.731.479-.305.52-.481 1.124-.481 1.771 0 1.933 1.567 3.5 3.5 3.5.646 0 1.25-.177 1.77-.482C15.83 6.12 16 7.04 16 8c0 4.418-3.582 8-8 8-.807 0-1.588-.12-2.324-.344-.837-.254-1.562-.385-2.207-.213-.39.105-.766.218-1.112.33-.663.216-1.3-.04-1.695-.435-.395-.396-.65-1.032-.435-1.695.112-.346.226-.722.33-1.113.172-.646.04-1.37-.213-2.206C.12 9.588 0 8.807 0 8c0-4.418 3.582-8 8-8zM4.5 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM8 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3.5 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm2.25-7C14.993 0 16 1.007 16 2.25S14.993 4.5 13.75 4.5 11.5 3.493 11.5 2.25 12.507 0 13.75 0z"
        fill={color}
      />
    </svg>
  );
};

MessageFilledNotification16.category = 'Communication';

export default MessageFilledNotification16;
