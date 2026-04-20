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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM11.5 9.5C10.6716 9.5 10 10.1716 10 11V21C10 21.8284 10.6716 22.5 11.5 22.5H12.5C13.3284 22.5 14 21.8284 14 21V11C14 10.1716 13.3284 9.5 12.5 9.5H11.5ZM19.5 9.5C18.6716 9.5 18 10.1716 18 11V21C18 21.8284 18.6716 22.5 19.5 22.5H20.5C21.3284 22.5 22 21.8284 22 21V11C22 10.1716 21.3284 9.5 20.5 9.5H19.5Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled32.category = 'Sound & Music';

export default PauseCircleFilled32;
