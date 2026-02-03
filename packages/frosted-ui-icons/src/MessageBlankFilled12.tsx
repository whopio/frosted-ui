import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_6949_92)">
        <path
          d="M5.99951 0C9.31322 0 11.9995 2.68629 11.9995 6C11.9995 9.31371 9.31322 12 5.99951 12C5.44163 12 4.90025 11.9236 4.38623 11.7803C3.80116 11.6171 3.34418 11.5423 2.94775 11.6406C2.57566 11.733 2.21405 11.8406 1.88818 11.9463C1.31009 12.1336 0.761211 11.9101 0.425293 11.5742C0.0894047 11.2383 -0.134254 10.6895 0.0532227 10.1113L0.211426 9.59863C0.262792 9.42095 0.311862 9.23705 0.35791 9.05078C0.455895 8.65422 0.38213 8.19802 0.219238 7.61328C0.0760174 7.09918 -0.000488281 6.55779 -0.000488281 6C-0.000488281 2.6864 2.6861 0.000281043 5.99951 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6949_92">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MessageBlankFilled12;
