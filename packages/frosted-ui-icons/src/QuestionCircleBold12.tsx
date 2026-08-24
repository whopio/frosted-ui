import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 5.75c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-5.5c1.673 0 2.75 1.3 2.75 2.733 0 1.512-1.254 2.68-2.75 2.68-.552 0-1-.448-1-1s.448-1 1-1c.46 0 .75-.34.75-.68 0-.418-.27-.733-.75-.733s-.75.314-.75.733v.132c0 .552-.448 1-1 1s-1-.448-1-1v-.132C3.25 3.55 4.327 2.25 6 2.25z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBold12.category = 'Interface General';

export default QuestionCircleBold12;
