import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.75 25.75C13.75 24.5074 14.7574 23.5 16 23.5C17.2426 23.5 18.25 24.5074 18.25 25.75C18.25 26.9926 17.2426 28 16 28C14.7574 28 13.75 26.9926 13.75 25.75ZM13.75 16C13.75 14.7574 14.7574 13.75 16 13.75C17.2426 13.75 18.25 14.7574 18.25 16C18.25 17.2426 17.2426 18.25 16 18.25C14.7574 18.25 13.75 17.2426 13.75 16ZM13.75 6.25C13.75 5.00736 14.7574 4 16 4C17.2426 4 18.25 5.00736 18.25 6.25C18.25 7.49264 17.2426 8.5 16 8.5C14.7574 8.5 13.75 7.49264 13.75 6.25Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical32.category = 'Interface General';

export default ThreeDotsVertical32;
