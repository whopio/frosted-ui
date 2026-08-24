import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBold16"
      {...props}
    >
      <path
        d="M5.913 13.736c.877 1.688 3.295 1.689 4.172 0l4.607-8.875c1.14-2.195-1.1-4.608-3.374-3.635L8.083 2.61c-.053.022-.113.022-.166 0l-3.24-1.386C2.405.253.166 2.666 1.306 4.86l4.608 8.875zm2.397-.922c-.131.25-.49.25-.622 0L3.08 3.939c-.274-.528.264-1.109.81-.875l3.112 1.33V7.27c0 .552.448 1 1 1s1-.448 1-1V4.394l3.103-1.33c.547-.233 1.086.348.812.876L8.31 12.814z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold16.category = 'Communication';

export default PaperAirplaneDownBold16;
