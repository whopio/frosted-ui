import * as React from 'react';
import { IconProps } from './types';

export const MarkAsRead16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MarkAsRead16"
      {...props}
    >
      <path
        d="M14.25 13.25c.414 0 .75.336.75.75s-.336.75-.75.75h-12c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12zm0-5c.414 0 .75.336.75.75s-.336.75-.75.75h-12c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12zM6.97 1.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L3.78 6.53c-.293.293-.767.293-1.06 0l-1.5-1.5c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l.97.97 3.72-3.72zm7.28 2.03c.414 0 .75.336.75.75s-.336.75-.75.75h-4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MarkAsRead16.category = 'Interface General';

export default MarkAsRead16;
