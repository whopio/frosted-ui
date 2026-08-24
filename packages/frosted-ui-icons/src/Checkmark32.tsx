import * as React from 'react';
import { IconProps } from './types';

export const Checkmark32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Checkmark32"
      {...props}
    >
      <path
        d="M27.72 7.969c.292-.292.767-.292 1.06 0 .293.293.293.768 0 1.06L12.03 25.782c-.14.14-.331.22-.53.22s-.39-.08-.53-.22l-7.75-7.75c-.293-.293-.293-.768 0-1.061.293-.293.767-.293 1.06 0l7.22 7.219 16.22-16.22z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Checkmark32.category = 'Checkmarks';

export default Checkmark32;
