import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM6 5C5.58579 5 5.25 5.33579 5.25 5.75V10.25C5.25005 10.6642 5.58582 11 6 11C6.41418 11 6.74995 10.6642 6.75 10.25V5.75C6.75 5.33579 6.41421 5 6 5ZM10 5C9.58579 5 9.25 5.33579 9.25 5.75V10.25C9.25005 10.6642 9.58582 11 10 11C10.4142 11 10.7499 10.6642 10.75 10.25V5.75C10.75 5.33579 10.4142 5 10 5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled16.category = 'Sound & Music';

export default PauseCircleFilled16;
