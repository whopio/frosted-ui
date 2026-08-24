import * as React from 'react';
import { IconProps } from './types';

export const Clock12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Clock12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5C3.515 1.5 1.5 3.515 1.5 6s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S8.485 1.5 6 1.5zM5.75 3c.414 0 .75.336.75.75v2.286l1.085.543c.37.185.52.636.336 1.006-.185.37-.636.521-1.007.336l-1.499-.75C5.161 7.044 5 6.784 5 6.5V3.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Clock12.category = 'Interface General';

export default Clock12;
