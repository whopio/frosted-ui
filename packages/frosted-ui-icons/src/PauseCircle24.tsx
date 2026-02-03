import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V15.75C9.74995 16.1642 9.41418 16.5 9 16.5C8.58582 16.5 8.25005 16.1642 8.25 15.75V8.25C8.25 7.83579 8.58579 7.5 9 7.5ZM15 7.5C15.4142 7.5 15.75 7.83579 15.75 8.25V15.75C15.7499 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.2501 16.1642 14.25 15.75V8.25C14.25 7.83579 14.5858 7.5 15 7.5Z"
        fill={color}
      />
    </svg>
  );
};

export default PauseCircle24;
