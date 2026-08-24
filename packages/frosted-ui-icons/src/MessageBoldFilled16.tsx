import * as React from 'react';
import { IconProps } from './types';

export const MessageBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5-1.034 0-2.021-.211-2.92-.592-.658.147-1.325.314-1.91.466-1.531.399-2.945-1.014-2.545-2.546.153-.585.316-1.255.463-1.916C.71 10.015.5 9.031.5 8 .5 3.858 3.858.5 8 .5zM5 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

MessageBoldFilled16.category = 'Communication';

export default MessageBoldFilled16;
