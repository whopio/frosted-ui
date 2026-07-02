import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM7.75 6.5C8.16421 6.5 8.5 6.83579 8.5 7.25V12.75C8.5 13.1642 8.16421 13.5 7.75 13.5C7.33579 13.5 7 13.1642 7 12.75V7.25C7 6.83579 7.33579 6.5 7.75 6.5ZM12.25 6.5C12.6642 6.5 13 6.83579 13 7.25V12.75C13 13.1642 12.6642 13.5 12.25 13.5C11.8358 13.5 11.5 13.1642 11.5 12.75V7.25C11.5 6.83579 11.8358 6.5 12.25 6.5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle20.category = 'Sound & Music';

export default PauseCircle20;
