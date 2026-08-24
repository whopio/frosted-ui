import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 13c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0-8C8.027 5 6.75 6.608 6.75 8.35c0 .414.336.75.75.75s.75-.336.75-.75c0-1.037.723-1.85 1.75-1.85 1.02 0 1.75.845 1.75 1.85 0 .627-.342 1.087-.99 1.292-.695.22-1.51.85-1.51 1.858 0 .414.335.75.749.75s.75-.336.751-.75c0-.055.02-.125.097-.208.08-.088.21-.17.365-.22 1.225-.386 2.038-1.393 2.038-2.722C13.25 6.654 11.98 5 10 5z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleFilled20.category = 'Interface General';

export default QuestionCircleFilled20;
