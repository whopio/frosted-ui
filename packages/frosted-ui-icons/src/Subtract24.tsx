import * as React from 'react';
import { IconProps } from './types';

export const Subtract24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.25 11.25C23.6642 11.25 24 11.5858 24 12C24 12.4142 23.6642 12.75 23.25 12.75H0.75C0.335787 12.75 6.4997e-07 12.4142 0 12C1.0832e-06 11.5858 0.335787 11.25 0.75 11.25H23.25Z"
        fill={color}
      />
    </svg>
  );
};

Subtract24.category = 'Interface General';

export default Subtract24;
