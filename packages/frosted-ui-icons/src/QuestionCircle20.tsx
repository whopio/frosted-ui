import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 12.25V11.75C10 10.9216 10.7406 10.2811 11.3913 9.76837C11.9143 9.35637 12.25 8.71739 12.25 8C12.25 6.75736 11.2426 5.75 10 5.75C8.75736 5.75 7.75 6.75736 7.75 8V8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="15" r="1" fill={color} />
      <circle
        cx="10"
        cy="10"
        r="8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuestionCircle20;
