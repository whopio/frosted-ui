import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircleFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm2.422 5.016c-.293-.293-.768-.293-1.06 0L7.968 6.908 6.577 5.516c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06L6.908 7.97 5.517 9.36c-.293.293-.293.768 0 1.06.293.293.767.294 1.06 0L7.97 9.03l1.392 1.393c.293.292.768.293 1.06 0 .294-.293.293-.768 0-1.06L9.03 7.968l1.393-1.393c.292-.293.293-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

XCircleFilled16.category = 'Interface General';

export default XCircleFilled16;
