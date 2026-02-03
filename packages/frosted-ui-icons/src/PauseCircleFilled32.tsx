import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM12 10C11.5858 10 11.25 10.3358 11.25 10.75V21.25C11.2501 21.6642 11.5858 22 12 22C12.4142 22 12.7499 21.6642 12.75 21.25V10.75C12.75 10.3358 12.4142 10 12 10ZM20 10C19.5858 10 19.25 10.3358 19.25 10.75V21.25C19.2501 21.6642 19.5858 22 20 22C20.4142 22 20.7499 21.6642 20.75 21.25V10.75C20.75 10.3358 20.4142 10 20 10Z"
        fill={color}
      />
    </svg>
  );
};

export default PauseCircleFilled32;
