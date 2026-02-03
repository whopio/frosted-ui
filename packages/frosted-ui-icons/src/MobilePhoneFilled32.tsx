import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.75 1C23.2018 1 26 3.79822 26 7.25V24.75C26 28.2018 23.2018 31 19.75 31H12.25C8.79822 31 6 28.2018 6 24.75V7.25C6 3.79822 8.79822 1 12.25 1H19.75ZM12.75 26.5C12.3358 26.5 12 26.8358 12 27.25C12 27.6642 12.3358 28 12.75 28H19.25C19.6642 28 20 27.6642 20 27.25C20 26.8358 19.6642 26.5 19.25 26.5H12.75Z"
        fill={color}
      />
    </svg>
  );
};

export default MobilePhoneFilled32;
