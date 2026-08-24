import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallFilled32"
      {...props}
    >
      <path
        d="M22.116 8.116c.488-.488 1.28-.488 1.768 0s.487 1.28 0 1.767L17.767 16l6.117 6.116c.488.488.488 1.28 0 1.767-.488.488-1.28.488-1.768 0L16 17.767l-6.116 6.116c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.767l6.115-6.117-6.115-6.116c-.488-.488-.488-1.28 0-1.767.488-.488 1.28-.488 1.768 0L16 14.232l6.116-6.116z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallFilled32.category = 'Interface General';

export default XMarkSmallFilled32;
