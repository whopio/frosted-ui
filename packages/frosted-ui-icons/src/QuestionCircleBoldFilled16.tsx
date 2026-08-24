import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 9.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM7.997 3.5C6.304 3.5 5 4.831 5 6.476v.228c0 .552.448 1 1 1s1-.448 1-1v-.228c0-.543.411-.976.997-.976.59 0 1.003.437 1.003.976 0 .522-.349.973-.746 1.102l-.08.022C7.632 7.714 7 8.197 7 9c0 .552.448 1 1 1 .38 0 .708-.211.878-.522C10.18 9.056 11 7.762 11 6.476 11 4.827 9.686 3.5 7.997 3.5z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBoldFilled16.category = 'Interface General';

export default QuestionCircleBoldFilled16;
