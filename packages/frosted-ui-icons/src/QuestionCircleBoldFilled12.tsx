import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 7.75c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0-5.5c-1.673 0-2.75 1.3-2.75 2.733v.132c0 .552.448 1 1 1s1-.448 1-1v-.132c0-.419.27-.733.75-.733s.75.315.75.733c0 .34-.29.68-.75.68-.552 0-1 .448-1 1s.448 1 1 1c1.496 0 2.75-1.168 2.75-2.68C8.75 3.55 7.673 2.25 6 2.25z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBoldFilled12.category = 'Interface General';

export default QuestionCircleBoldFilled12;
