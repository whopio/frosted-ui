import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 16.5C8.25 15.5335 9.0335 14.75 10 14.75C10.9665 14.75 11.75 15.5335 11.75 16.5C11.75 17.4665 10.9665 18.25 10 18.25C9.0335 18.25 8.25 17.4665 8.25 16.5ZM8.25 10C8.25 9.0335 9.0335 8.25 10 8.25C10.9665 8.25 11.75 9.0335 11.75 10C11.75 10.9665 10.9665 11.75 10 11.75C9.0335 11.75 8.25 10.9665 8.25 10ZM8.25 3.5C8.25 2.5335 9.0335 1.75 10 1.75C10.9665 1.75 11.75 2.5335 11.75 3.5C11.75 4.4665 10.9665 5.25 10 5.25C9.0335 5.25 8.25 4.4665 8.25 3.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold20.category = 'Interface General';

export default ThreeDotsVerticalBold20;
