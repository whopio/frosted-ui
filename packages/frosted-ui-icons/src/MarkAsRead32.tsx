import * as React from 'react';
import { IconProps } from './types';

export const MarkAsRead32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MarkAsRead32"
      {...props}
    >
      <path
        d="M30 27.25c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h28zm0-11c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h28zM11.72 1.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-8.25 8.25c-.293.293-.767.293-1.06 0l-3-3c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L4 8.94l7.72-7.72zM30 5.25c.414 0 .75.336.75.75s-.336.75-.75.75H17c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h13z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MarkAsRead32.category = 'Interface General';

export default MarkAsRead32;
