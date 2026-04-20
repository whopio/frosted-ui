import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 4.75C2.44036 4.75 3 5.30964 3 6C3 6.69036 2.44036 7.25 1.75 7.25C1.05964 7.25 0.5 6.69036 0.5 6C0.5 5.30964 1.05964 4.75 1.75 4.75ZM6 4.75C6.69036 4.75 7.25 5.30964 7.25 6C7.25 6.69036 6.69036 7.25 6 7.25C5.30964 7.25 4.75 6.69036 4.75 6C4.75 5.30964 5.30964 4.75 6 4.75ZM10.25 4.75C10.9404 4.75 11.5 5.30964 11.5 6C11.5 6.69036 10.9404 7.25 10.25 7.25C9.55964 7.25 9 6.69036 9 6C9 5.30964 9.55964 4.75 10.25 4.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal12.category = 'Interface General';

export default ThreeDotsHorizontal12;
