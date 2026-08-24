import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmall32"
      {...props}
    >
      <path
        d="M22.47 8.47c.294-.293.768-.293 1.061 0 .293.293.293.768 0 1.06L17.061 16l6.47 6.47c.293.293.293.768 0 1.06-.293.293-.767.293-1.06 0L16 17.06l-6.47 6.47c-.293.293-.768.293-1.06 0-.293-.292-.293-.767 0-1.06L14.94 16 8.47 9.53c-.293-.292-.293-.767 0-1.06.292-.293.767-.293 1.06 0l6.47 6.47 6.47-6.47z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall32.category = 'Interface General';

export default XMarkSmall32;
