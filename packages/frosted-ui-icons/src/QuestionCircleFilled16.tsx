import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 9.7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-.002-6.075c-1.522 0-2.748 1.207-2.748 2.582v.133c0 .414.336.75.75.75s.75-.336.75-.75v-.133c0-.485.491-1.082 1.248-1.082.759 0 1.252.599 1.252 1.082 0 .303-.284.71-.827.873l-.112.03c-.503.112-1.063.556-1.063 1.265 0 .414.336.75.75.75.354 0 .648-.246.727-.576 1.027-.265 2.025-1.13 2.025-2.342 0-1.377-1.232-2.582-2.752-2.582z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleFilled16.category = 'Interface General';

export default QuestionCircleFilled16;
