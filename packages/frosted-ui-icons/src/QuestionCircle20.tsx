import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircle20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 11c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c1.98 0 3.25 1.654 3.25 3.35 0 1.33-.813 2.336-2.038 2.722-.155.05-.284.132-.365.22-.077.083-.097.153-.097.208 0 .414-.337.75-.751.75s-.749-.336-.749-.75c0-1.008.815-1.639 1.51-1.858.648-.205.99-.665.99-1.292 0-1.005-.73-1.85-1.75-1.85-1.027 0-1.75.813-1.75 1.85 0 .414-.336.75-.75.75s-.75-.336-.75-.75C6.75 6.608 8.027 5 10 5z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircle20.category = 'Interface General';

export default QuestionCircle20;
