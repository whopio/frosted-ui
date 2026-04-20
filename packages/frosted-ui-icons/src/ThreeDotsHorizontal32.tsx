import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.25 13.75C7.49264 13.75 8.5 14.7574 8.5 16C8.5 17.2426 7.49264 18.25 6.25 18.25C5.00736 18.25 4 17.2426 4 16C4 14.7574 5.00736 13.75 6.25 13.75ZM16 13.75C17.2426 13.75 18.25 14.7574 18.25 16C18.25 17.2426 17.2426 18.25 16 18.25C14.7574 18.25 13.75 17.2426 13.75 16C13.75 14.7574 14.7574 13.75 16 13.75ZM25.75 13.75C26.9926 13.75 28 14.7574 28 16C28 17.2426 26.9926 18.25 25.75 18.25C24.5074 18.25 23.5 17.2426 23.5 16C23.5 14.7574 24.5074 13.75 25.75 13.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal32.category = 'Interface General';

export default ThreeDotsHorizontal32;
