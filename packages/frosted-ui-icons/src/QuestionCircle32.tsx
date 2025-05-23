import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircle32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 20.25V20.25C16 19.1454 16.9273 18.2859 17.9525 17.8749C19.8851 17.1002 21.25 15.2095 21.25 13C21.25 10.1005 18.8995 7.75 16 7.75C13.1005 7.75 10.75 10.1005 10.75 13V13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="24.25" r="1.25" fill={color} />
      <circle
        cx="16"
        cy="16"
        r="14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuestionCircle32;
