import * as React from 'react';
import { IconProps } from './types';

export const MarkAsRead12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MarkAsRead12"
      {...props}
    >
      <path
        d="M11 10.25c.414 0 .75.336.75.75s-.336.75-.75.75H1c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10zm0-4c.414 0 .75.336.75.75s-.336.75-.75.75H1C.586 7.75.25 7.414.25 7s.336-.75.75-.75h10zM4.22 1.1c.293-.293.767-.293 1.06 0 .293.292.293.767 0 1.06L2.53 4.91c-.293.293-.767.293-1.06 0l-1-1c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0l.47.47L4.22 1.1zM11 2.25c.414 0 .75.336.75.75s-.336.75-.75.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MarkAsRead12.category = 'Interface General';

export default MarkAsRead12;
