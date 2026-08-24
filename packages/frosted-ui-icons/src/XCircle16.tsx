import * as React from 'react';
import { IconProps } from './types';

export const XCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircle16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm1.361 3.516c.293-.293.768-.293 1.06 0 .294.292.293.767 0 1.06L9.03 7.97l1.393 1.392c.292.293.293.768 0 1.06-.293.294-.768.293-1.06 0L7.968 9.03l-1.392 1.393c-.293.293-.767.292-1.06 0-.293-.293-.293-.768 0-1.06l1.391-1.393-1.391-1.393c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L7.97 6.908 9.36 5.516z"
        fill={color}
      />
    </svg>
  );
};

XCircle16.category = 'Interface General';

export default XCircle16;
