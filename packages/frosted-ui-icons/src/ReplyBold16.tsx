import * as React from 'react';
import { IconProps } from './types';

export const ReplyBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyBold16"
      {...props}
    >
      <path
        d="M8 6c5.343 0 6 3.19 6 6.762C11.917 10.38 10.381 10 8 10v2.836c0 .258-.304.396-.498.226L2.177 8.375c-.227-.199-.227-.551 0-.75l5.325-4.687c.194-.17.498-.033.498.226V6z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBold16.category = 'Arrows';

export default ReplyBold16;
