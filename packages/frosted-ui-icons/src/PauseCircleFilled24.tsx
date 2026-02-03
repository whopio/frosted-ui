import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM9 7.5C8.58579 7.5 8.25 7.83579 8.25 8.25V15.75C8.25005 16.1642 8.58582 16.5 9 16.5C9.41418 16.5 9.74995 16.1642 9.75 15.75V8.25C9.75 7.83579 9.41421 7.5 9 7.5ZM15 7.5C14.5858 7.5 14.25 7.83579 14.25 8.25V15.75C14.2501 16.1642 14.5858 16.5 15 16.5C15.4142 16.5 15.7499 16.1642 15.75 15.75V8.25C15.75 7.83579 15.4142 7.5 15 7.5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled24.category = 'Sound & Music';

export default PauseCircleFilled24;
