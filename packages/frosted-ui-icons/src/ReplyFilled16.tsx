import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyFilled16"
      {...props}
    >
      <path
        d="M8.5 12.836c0 .904-1.066 1.386-1.744.79L1.431 8.938c-.566-.498-.566-1.38 0-1.877l5.325-4.687.132-.099c.676-.435 1.612.041 1.612.888v1.857c2.68.136 4.372 1.02 5.354 2.476C14.876 9.013 15 10.981 15 12.762c0 .312-.194.592-.486.702-.293.11-.622.027-.828-.208-.959-1.095-1.873-1.641-2.796-1.927-.742-.23-1.517-.3-2.39-.321v1.828z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled16.category = 'Arrows';

export default ReplyFilled16;
