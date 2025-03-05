import * as React from 'react';
import { IconProps } from './types';

export const Photo20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75 13L4.71651 9.51877C4.99699 9.18962 5.4077 9 5.84015 9C6.25296 9 6.64691 9.17285 6.92645 9.47661L15 18.25M1.75 4.87V15.13C1.75 16.8531 3.14687 18.25 4.87 18.25H15.13C16.8531 18.25 18.25 16.8531 18.25 15.13V4.87C18.25 3.14687 16.8531 1.75 15.13 1.75H4.87C3.14687 1.75 1.75 3.14687 1.75 4.87ZM14.25 7.5C14.25 8.4665 13.4665 9.25 12.5 9.25C11.5335 9.25 10.75 8.4665 10.75 7.5C10.75 6.5335 11.5335 5.75 12.5 5.75C13.4665 5.75 14.25 6.5335 14.25 7.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Photo20;
