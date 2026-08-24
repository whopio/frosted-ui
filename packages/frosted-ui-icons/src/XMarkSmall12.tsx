import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmall12"
      {...props}
    >
      <path
        d="M7.72 3.22c.292-.293.767-.293 1.06 0 .293.292.293.767 0 1.06L7.06 6l1.72 1.72c.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0L5.999 7.062 4.28 8.78c-.293.293-.768.293-1.06 0-.293-.293-.293-.768 0-1.06L4.938 6 3.22 4.28c-.293-.292-.293-.767 0-1.06.292-.292.767-.292 1.06 0L6 4.94l1.72-1.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmall12.category = 'Interface General';

export default XMarkSmall12;
