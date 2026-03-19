import * as React from 'react';
import { IconProps } from './types';

export const CommandBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.5 4.5V2.875C4.5 1.97754 3.77246 1.25 2.875 1.25C1.97754 1.25 1.25 1.97754 1.25 2.875C1.25 3.77246 1.97754 4.5 2.875 4.5H4.5ZM4.5 4.5V7.5M4.5 4.5H7.5M4.5 7.5H7.5M4.5 7.5H2.875C1.97754 7.5 1.25 8.22754 1.25 9.125C1.25 10.0225 1.97754 10.75 2.875 10.75C3.77246 10.75 4.5 10.0225 4.5 9.125V7.5ZM7.5 7.5V4.5M7.5 7.5V9.125C7.5 10.0225 8.22754 10.75 9.125 10.75C10.0225 10.75 10.75 10.0225 10.75 9.125C10.75 8.22754 10.0225 7.5 9.125 7.5H7.5ZM7.5 4.5V2.875C7.5 1.97754 8.22754 1.25 9.125 1.25C10.0225 1.25 10.75 1.97754 10.75 2.875C10.75 3.77246 10.0225 4.5 9.125 4.5H7.5Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandBoldFilled12.category = 'Product Icons';

export default CommandBoldFilled12;
