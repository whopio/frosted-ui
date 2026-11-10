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
        d="M4.469 4.47c.293-.293.767-.294 1.06 0L8 6.938l2.47-2.469c.293-.293.767-.293 1.06 0 .293.293.293.768 0 1.06L9.061 8l2.468 2.47c.293.292.293.767 0 1.06-.293.293-.767.293-1.06 0L7.999 9.06l-2.47 2.47c-.293.292-.767.292-1.06 0-.293-.293-.293-.768 0-1.06L6.939 8l-2.47-2.47c-.293-.293-.293-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall16.category = 'Interface General';

export default XMarkSmall16;
