import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.75 10.25C4.75 9.55964 5.30964 9 6 9C6.69036 9 7.25 9.55964 7.25 10.25C7.25 10.9404 6.69036 11.5 6 11.5C5.30964 11.5 4.75 10.9404 4.75 10.25ZM4.75 6C4.75 5.30964 5.30964 4.75 6 4.75C6.69036 4.75 7.25 5.30964 7.25 6C7.25 6.69036 6.69036 7.25 6 7.25C5.30964 7.25 4.75 6.69036 4.75 6ZM4.75 1.75C4.75 1.05964 5.30964 0.5 6 0.5C6.69036 0.5 7.25 1.05964 7.25 1.75C7.25 2.44036 6.69036 3 6 3C5.30964 3 4.75 2.44036 4.75 1.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical12.category = 'Product Icons';

export default ThreeDotsVertical12;
