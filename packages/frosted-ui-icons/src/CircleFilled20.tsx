import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 8.05322e-08 15.5228 0 10C0 4.47715 4.47715 6.44258e-08 10 0Z"
        fill={color}
      />
    </svg>
  );
};

export default CircleFilled20;
