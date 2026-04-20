import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.25 19.75C10.25 18.7835 11.0335 18 12 18C12.9665 18 13.75 18.7835 13.75 19.75C13.75 20.7165 12.9665 21.5 12 21.5C11.0335 21.5 10.25 20.7165 10.25 19.75ZM10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12ZM10.25 4.25C10.25 3.2835 11.0335 2.5 12 2.5C12.9665 2.5 13.75 3.2835 13.75 4.25C13.75 5.2165 12.9665 6 12 6C11.0335 6 10.25 5.2165 10.25 4.25Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical24.category = 'Interface General';

export default ThreeDotsVertical24;
