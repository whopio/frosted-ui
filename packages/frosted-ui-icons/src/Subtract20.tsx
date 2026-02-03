import * as React from 'react';
import { IconProps } from './types';

export const Subtract20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.25 9.25C19.6642 9.25 20 9.58579 20 10C20 10.4142 19.6642 10.75 19.25 10.75H0.75C0.335787 10.75 4.61054e-07 10.4142 0 10C8.90904e-07 9.58579 0.335787 9.25 0.75 9.25H19.25Z"
        fill={color}
      />
    </svg>
  );
};

Subtract20.category = 'Interface General';

export default Subtract20;
