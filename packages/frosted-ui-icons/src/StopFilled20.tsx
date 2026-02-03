import * as React from 'react';
import { IconProps } from './types';

export const StopFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 0C17.2018 0 20 2.79822 20 6.25V13.75C20 17.2018 17.2018 20 13.75 20H6.25C2.79822 20 1.29287e-07 17.2018 0 13.75V6.25C0 2.79822 2.79822 5.44135e-08 6.25 0H13.75Z"
        fill={color}
      />
    </svg>
  );
};

export default StopFilled20;
