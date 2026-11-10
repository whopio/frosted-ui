import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneBoldFilled16"
      {...props}
    >
      <path
        d="M14 5.75c.552 0 1 .448 1 1 0 3.475-2.532 6.356-5.851 6.904-.085.014-.149.087-.149.173 0 .095.078.173.173.173h1.077c.552 0 1 .448 1 1s-.448 1-1 1h-4.5c-.552 0-1-.448-1-1s.448-1 1-1h1.077c.095 0 .173-.078.173-.173 0-.086-.064-.16-.149-.173C3.532 13.106 1 10.224 1 6.75c0-.552.448-1 1-1s1 .448 1 1c0 2.761 2.239 5 5 5s5-2.239 5-5c0-.552.448-1 1-1zM8 0c2.21 0 4 1.79 4 4v2.75c0 2.21-1.79 4-4 4s-4-1.79-4-4V4c0-2.21 1.79-4 4-4z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneBoldFilled16.category = 'Sound & Music';

export default MicrophoneBoldFilled16;
