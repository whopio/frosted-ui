import * as React from 'react';
import { IconProps } from './types';

export const MarkAsRead20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MarkAsRead20"
      {...props}
    >
      <path
        d="M17 15.25c.414 0 .75.336.75.75s-.336.75-.75.75H3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h14zm0-6c.414 0 .75.336.75.75s-.336.75-.75.75H3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h14zM6.72 1.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L3.53 6.53c-.293.293-.767.293-1.06 0l-2-2c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L3 4.94l3.72-3.72zM17 3.25c.414 0 .75.336.75.75s-.336.75-.75.75h-6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MarkAsRead20.category = 'Interface General';

export default MarkAsRead20;
