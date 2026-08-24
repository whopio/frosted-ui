import * as React from 'react';
import { IconProps } from './types';

export const MessageBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBoldFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.246 0 9.5 4.253 9.5 9.5s-4.254 9.5-9.5 9.5c-1.344 0-2.623-.284-3.783-.788-.92.204-1.857.437-2.668.65C1.799 19.818.18 18.2.638 16.45c.212-.81.444-1.749.648-2.67C.782 12.62.5 11.341.5 10 .5 4.753 4.753.5 10 .5zM5.75 8.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25S7 10.69 7 10s-.56-1.25-1.25-1.25zm4.25 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm4.25 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

MessageBoldFilled20.category = 'Communication';

export default MessageBoldFilled20;
