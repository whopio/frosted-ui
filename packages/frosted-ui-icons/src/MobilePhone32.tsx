import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.75 1C23.2018 1 26 3.79822 26 7.25V24.75C26 28.2018 23.2018 31 19.75 31H12.25C8.79822 31 6 28.2018 6 24.75V7.25C6 3.79822 8.79822 1 12.25 1H19.75ZM12.25 2.5C9.62665 2.5 7.5 4.62665 7.5 7.25V24.75C7.5 27.3734 9.62665 29.5 12.25 29.5H19.75C22.3734 29.5 24.5 27.3734 24.5 24.75V7.25C24.5 4.62665 22.3734 2.5 19.75 2.5H12.25ZM19.25 26.5C19.6642 26.5 20 26.8358 20 27.25C20 27.6642 19.6642 28 19.25 28H12.75C12.3358 28 12 27.6642 12 27.25C12 26.8358 12.3358 26.5 12.75 26.5H19.25Z"
        fill={color}
      />
    </svg>
  );
};

export default MobilePhone32;
