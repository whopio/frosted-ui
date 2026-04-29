import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM3.375 4.875C2.79265 4.875 2.31357 5.31751 2.25586 5.88477L2.25 6L2.25586 6.11523C2.31357 6.68249 2.79265 7.125 3.375 7.125C3.99624 7.125 4.5 6.62141 4.5 6C4.5 5.4175 4.05736 4.93856 3.49023 4.88086L3.375 4.875ZM6 4.875C5.41757 4.875 4.93857 5.31757 4.88086 5.88477L4.875 6L4.88086 6.11523C4.93857 6.68243 5.41757 7.125 6 7.125C6.62133 7.125 7.125 6.62133 7.125 6C7.125 5.41757 6.68243 4.93857 6.11523 4.88086L6 4.875ZM8.625 4.875C8.04257 4.875 7.56357 5.31757 7.50586 5.88477L7.5 6L7.50586 6.11523C7.56357 6.68243 8.04257 7.125 8.625 7.125C9.24634 7.125 9.75 6.62133 9.75 6C9.75 5.41757 9.30743 4.93857 8.74023 4.88086L8.625 4.875Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleBoldFilled12.category = 'Interface General';

export default ThreeDotsCircleBoldFilled12;
