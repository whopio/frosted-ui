import * as React from 'react';
import { IconProps } from './types';

export const XMark24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMark24"
      {...props}
    >
      <path
        d="M20.97 1.97c.293-.293.768-.293 1.06 0 .293.293.294.768 0 1.06L13.062 12l8.97 8.97c.292.293.292.768 0 1.06-.293.293-.769.293-1.062 0L12 13.062 3.03 22.03c-.292.293-.767.293-1.06 0-.292-.293-.293-.767 0-1.06L10.94 12 1.97 3.03c-.293-.292-.293-.767 0-1.06.292-.293.767-.293 1.06 0L12 10.94l8.97-8.97z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark24.category = 'Interface General';

export default XMark24;
