import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zM10 13c.69 0 1.25.56 1.25 1.25S10.69 15.5 10 15.5s-1.25-.56-1.25-1.25S9.31 13 10 13zm0-8.25c2.14 0 3.5 1.79 3.5 3.6 0 1.572-1.045 2.704-2.512 3.04-.068.486-.484.86-.989.86-.552 0-.999-.448-.999-1 0-1.011.805-1.644 1.527-1.805.674-.15.973-.557.973-1.095 0-.89-.64-1.6-1.5-1.6-.87 0-1.5.681-1.5 1.6 0 .552-.448 1-1 1s-1-.448-1-1c0-1.86 1.369-3.6 3.5-3.6z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBold20.category = 'Interface General';

export default QuestionCircleBold20;
