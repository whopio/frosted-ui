import * as React from 'react';
import { IconProps } from './types';

export const MarkAsUnread16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MarkAsUnread16"
      {...props}
    >
      <path
        d="M14 13.25c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12zm0-5c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12zM5.72 1.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L5.186 3.875 6.78 5.47c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L4.125 4.935 2.53 6.53c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l1.594-1.595L1.47 2.28c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l1.595 1.594L5.72 1.22zM14 3.25c.414 0 .75.336.75.75s-.336.75-.75.75h-4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MarkAsUnread16.category = 'Interface General';

export default MarkAsUnread16;
