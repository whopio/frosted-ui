import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 15.7c-.773 0-1.4.627-1.4 1.4 0 .773.627 1.4 1.4 1.4.773 0 1.4-.627 1.4-1.4 0-.773-.627-1.4-1.4-1.4zm0-10.7c-2.557 0-4.25 2.04-4.25 4.283 0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25C10.25 8.785 10.957 8 12 8c1.032 0 1.75.818 1.75 1.783 0 .53-.27.933-.903 1.138-.93.3-2.097 1.17-2.097 2.62v.209c0 .69.559 1.25 1.249 1.25.69 0 1.25-.56 1.251-1.25v-.204c.004-.009.014-.026.038-.053.061-.066.176-.144.328-.193 1.557-.504 2.634-1.795 2.634-3.517C16.25 7.598 14.568 5.5 12 5.5z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBoldFilled24.category = 'Interface General';

export default QuestionCircleBoldFilled24;
