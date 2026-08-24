import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUp16"
      {...props}
    >
      <path
        d="M5.25 8.478v4.917c0 .472.383.855.855.855h3.79c.472 0 .855-.383.855-.855V8.478c0-.126.102-.228.228-.228h2.268c.294 0 .45-.346.257-.567L8.514 1.987c-.272-.31-.756-.31-1.028 0l-4.99 5.696c-.193.22-.036.567.258.567h2.268c.126 0 .228.102.228.228z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUp16.category = 'Arrows';

export default ArrowFatUp16;
