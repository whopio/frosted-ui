import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="7.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.25V9C8 8.58579 8.345 8.26224 8.73642 8.12672C9.6174 7.82171 10.25 6.98473 10.25 6C10.25 4.75736 9.24264 3.75 8 3.75C6.75736 3.75 5.75 4.75736 5.75 6V6.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="12" r="1" fill={color} />
    </svg>
  );
};

export default QuestionCircle16;
