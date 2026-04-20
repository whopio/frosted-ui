import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.25 19.75C22.25 13.8929 21.0119 8.25 11.25 8.25V4.14199C11.25 3.70611 10.7311 3.47894 10.4109 3.77459L2.09703 11.4489C1.77531 11.7459 1.77531 12.2541 2.09703 12.5511L10.4109 20.2254C10.7311 20.5211 11.25 20.2939 11.25 19.858V15.75C15.1548 15.75 18.8333 15.8452 22.25 19.75Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyFilled24.category = 'Arrows';

export default ReplyFilled24;
