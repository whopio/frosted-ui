import * as React from 'react';
import { IconProps } from './types';

export const XMark32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMark32"
      {...props}
    >
      <path
        d="M28.97 1.97c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L17.06 16l12.97 12.97c.293.293.293.767 0 1.06-.293.293-.768.293-1.06 0L16 17.06 3.03 30.03c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06L14.94 16 1.97 3.03c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L16 14.94 28.97 1.97z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark32.category = 'Interface General';

export default XMark32;
