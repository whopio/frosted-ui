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
        d="M8 0c.728 0 1.433.099 2.104.281-.535.68-.854 1.537-.854 2.469 0 2.21 1.79 4 4 4 .932 0 1.788-.32 2.468-.854C15.9 6.566 16 7.27 16 8c0 4.418-3.582 8-8 8-.807 0-1.588-.12-2.324-.344-.837-.254-1.562-.385-2.207-.213-.39.105-.766.218-1.112.33-.663.216-1.3-.04-1.695-.435-.395-.396-.65-1.032-.435-1.695.112-.346.226-.722.33-1.113.172-.646.04-1.37-.213-2.206C.12 9.588 0 8.807 0 8c0-4.418 3.582-8 8-8zM4.5 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM8 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3.5 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm1.75-7C14.769 0 16 1.231 16 2.75S14.769 5.5 13.25 5.5 10.5 4.269 10.5 2.75 11.731 0 13.25 0z"
        fill={color}
      />
    </svg>
  );
};

MessageFilledNotification16.category = 'Communication';

export default MessageFilledNotification16;
