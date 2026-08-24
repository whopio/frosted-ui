import * as React from 'react';
import { IconProps } from './types';

export const XCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircle12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5C3.515 1.5 1.5 3.515 1.5 6s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S8.485 1.5 6 1.5zm1.06 2.379c.293-.293.768-.293 1.061 0 .293.293.293.768 0 1.06L7.061 6l1.06 1.06c.293.293.293.768 0 1.061-.293.293-.768.293-1.06 0L6 7.061 4.94 8.12c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.06L4.939 6 3.88 4.94c-.293-.293-.293-.768 0-1.061.293-.293.768-.293 1.06 0L6 4.939l1.06-1.06z"
        fill={color}
      />
    </svg>
  );
};

XCircle12.category = 'Interface General';

export default XCircle12;
