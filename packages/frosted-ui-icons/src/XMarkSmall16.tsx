import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmall16"
      {...props}
    >
      <path
        d="M10.469 4.47c.293-.293.767-.293 1.06 0 .293.293.293.768 0 1.06L9.06 8l2.47 2.469c.292.293.292.769 0 1.061-.294.293-.768.293-1.061 0l-2.47-2.47-2.47 2.47c-.293.293-.767.293-1.06 0-.293-.292-.293-.767 0-1.06L6.939 8l-2.47-2.47c-.293-.293-.293-.768 0-1.061.293-.293.767-.293 1.06 0L8 6.939l2.47-2.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmall16.category = 'Interface General';

export default XMarkSmall16;
