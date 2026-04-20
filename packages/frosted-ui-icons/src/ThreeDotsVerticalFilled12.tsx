import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.25 10.25C4.25 9.2835 5.0335 8.5 6 8.5C6.9665 8.5 7.75 9.2835 7.75 10.25C7.75 11.2165 6.9665 12 6 12C5.0335 12 4.25 11.2165 4.25 10.25ZM4.25 6C4.25 5.0335 5.0335 4.25 6 4.25C6.9665 4.25 7.75 5.0335 7.75 6C7.75 6.9665 6.9665 7.75 6 7.75C5.0335 7.75 4.25 6.9665 4.25 6ZM4.25 1.75C4.25 0.783502 5.0335 0 6 0C6.9665 0 7.75 0.783502 7.75 1.75C7.75 2.7165 6.9665 3.5 6 3.5C5.0335 3.5 4.25 2.7165 4.25 1.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled12.category = 'Interface General';

export default ThreeDotsVerticalFilled12;
