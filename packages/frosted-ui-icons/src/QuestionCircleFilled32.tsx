import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 22.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM16 7c-3.42 0-6 2.667-6 6v.299c0 .414.336.75.75.75s.75-.336.75-.75V13c0-2.519 1.922-4.5 4.5-4.5 2.578 0 4.5 1.981 4.5 4.5 0 1.915-1.111 3.378-2.785 3.968-1.19.419-2.465 1.474-2.465 3.032 0 .414.336.75.75.75s.75-.336.75-.75c0-.651.57-1.304 1.463-1.618C20.472 17.586 22 15.567 22 13c0-3.333-2.58-6-6-6z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleFilled32.category = 'Interface General';

export default QuestionCircleFilled32;
