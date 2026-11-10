import * as React from 'react';
import { IconProps } from './types';

export const Reply32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Reply32"
      {...props}
    >
      <path
        d="M14.75 10.75c13.571 0 15.5 7.857 15.5 16-4.75-5.429-10.072-5.5-15.5-5.5v5.52c0 .657-.784.996-1.263.548L2.18 16.73c-.422-.395-.422-1.065 0-1.46L13.488 4.682c.48-.448 1.263-.109 1.263.548v5.52z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Reply32.category = 'Arrows';

export default Reply32;
