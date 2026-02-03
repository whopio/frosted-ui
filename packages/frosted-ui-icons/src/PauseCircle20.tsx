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
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM7.75 6.5C8.16421 6.5 8.5 6.83579 8.5 7.25V12.75C8.5 13.1642 8.16421 13.5 7.75 13.5C7.33579 13.5 7 13.1642 7 12.75V7.25C7 6.83579 7.33579 6.5 7.75 6.5ZM12.25 6.5C12.6642 6.5 13 6.83579 13 7.25V12.75C13 13.1642 12.6642 13.5 12.25 13.5C11.8358 13.5 11.5 13.1642 11.5 12.75V7.25C11.5 6.83579 11.8358 6.5 12.25 6.5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle20.category = 'Sound & Music';

export default PauseCircle20;
