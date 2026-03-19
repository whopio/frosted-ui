import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M2.75 6.75C3.44036 6.75 4 7.30964 4 8C4 8.69036 3.44036 9.25 2.75 9.25C2.05964 9.25 1.5 8.69036 1.5 8C1.5 7.30964 2.05964 6.75 2.75 6.75ZM8 6.75C8.69036 6.75 9.25 7.30964 9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75ZM13.25 6.75C13.9404 6.75 14.5 7.30964 14.5 8C14.5 8.69036 13.9404 9.25 13.25 9.25C12.5596 9.25 12 8.69036 12 8C12 7.30964 12.5596 6.75 13.25 6.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal16.category = 'Product Icons';

export default ThreeDotsHorizontal16;
