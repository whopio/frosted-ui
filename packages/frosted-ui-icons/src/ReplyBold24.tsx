import * as React from 'react';
import { IconProps } from './types';

export const ReplyBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyBold24"
      {...props}
    >
      <path
        d="M22 19.75c0-5.857-1.5-11.5-11-11.5V4.184c0-.442-.532-.667-.849-.358l-7.849 7.636c-.302.295-.302.781 0 1.075l7.85 7.637c.316.309.848.084.848-.358V15.75c3.905 0 7.583.095 11 4z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBold24.category = 'Arrows';

export default ReplyBold24;
