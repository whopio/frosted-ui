import * as React from 'react';
import { IconProps } from './types';

export const XMark20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMark20"
      {...props}
    >
      <path
        d="M16.969 1.97c.293-.293.768-.293 1.061 0 .293.292.293.767 0 1.06L11.06 10l6.97 6.97c.293.293.293.767 0 1.06-.293.293-.768.293-1.061 0l-6.97-6.97-6.969 6.97c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06L8.94 10 1.97 3.03c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L10 8.94l6.969-6.97z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark20.category = 'Interface General';

export default XMark20;
