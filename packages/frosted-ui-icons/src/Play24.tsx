import * as React from 'react';
import { IconProps } from './types';

export const Play24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Play24"
      {...props}
    >
      <path
        d="M4.75 4.054v15.872c0 1.843 2.058 2.937 3.585 1.908l11.824-7.969c1.355-.914 1.352-2.91-.008-3.82L8.328 2.143C6.8 1.12 4.75 2.216 4.75 4.054z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play24.category = 'Sound & Music';

export default Play24;
