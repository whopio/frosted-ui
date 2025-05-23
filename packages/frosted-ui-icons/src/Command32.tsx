import * as React from 'react';
import { IconProps } from './types';

export const Command32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.75 12.75V8.25C12.75 5.76472 10.7353 3.75 8.25 3.75C5.76472 3.75 3.75 5.76472 3.75 8.25C3.75 10.7353 5.76472 12.75 8.25 12.75H12.75ZM12.75 12.75H19.25M12.75 12.75V19.25M12.75 19.25V23.75C12.75 26.2353 10.7353 28.25 8.25 28.25C5.76472 28.25 3.75 26.2353 3.75 23.75C3.75 21.2647 5.76472 19.25 8.25 19.25H12.75ZM12.75 19.25H19.25M19.25 12.75V8.25C19.25 5.76472 21.2647 3.75 23.75 3.75C26.2353 3.75 28.25 5.76472 28.25 8.25C28.25 10.7353 26.2353 12.75 23.75 12.75H19.25ZM19.25 12.75V19.25M19.25 19.25V23.75C19.25 26.2353 21.2647 28.25 23.75 28.25C26.2353 28.25 28.25 26.2353 28.25 23.75C28.25 21.2647 26.2353 19.25 23.75 19.25H19.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Command32;
