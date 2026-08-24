import * as React from 'react';
import { IconProps } from './types';

export const Checkmark24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Checkmark24"
      {...props}
    >
      <path
        d="M21.72 4.47c.292-.293.766-.293 1.06-.001.292.292.294.768.001 1.061L8.716 19.62c-.14.14-.332.22-.531.22-.2 0-.39-.08-.53-.22L1.22 13.185c-.293-.292-.293-.768 0-1.061.293-.293.767-.293 1.06 0l5.905 5.904L21.72 4.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Checkmark24.category = 'Checkmarks';

export default Checkmark24;
