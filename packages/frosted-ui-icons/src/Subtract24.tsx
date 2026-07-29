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
      data-fui-icon="Subtract24"
      {...props}
    >
      <path
        d="M22.25 11.25C22.6642 11.25 23 11.5858 23 12C23 12.4142 22.6642 12.75 22.25 12.75H1.75C1.33579 12.75 1 12.4142 1 12C1 11.5858 1.33579 11.25 1.75 11.25H22.25Z"
        fill={color}
      />
    </svg>
  );
};

Subtract24.category = 'Interface General';

export default Subtract24;
