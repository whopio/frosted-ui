import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.25 13.25C6.25 12.2835 7.0335 11.5 8 11.5C8.9665 11.5 9.75 12.2835 9.75 13.25C9.75 14.2165 8.9665 15 8 15C7.0335 15 6.25 14.2165 6.25 13.25ZM6.25 8C6.25 7.0335 7.0335 6.25 8 6.25C8.9665 6.25 9.75 7.0335 9.75 8C9.75 8.9665 8.9665 9.75 8 9.75C7.0335 9.75 6.25 8.9665 6.25 8ZM6.25 2.75C6.25 1.7835 7.0335 1 8 1C8.9665 1 9.75 1.7835 9.75 2.75C9.75 3.7165 8.9665 4.5 8 4.5C7.0335 4.5 6.25 3.7165 6.25 2.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled16.category = 'Interface General';

export default ThreeDotsVerticalFilled16;
