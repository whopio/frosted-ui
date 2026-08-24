import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkFilled32"
      {...props}
    >
      <path
        d="M28.116 2.116c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L17.767 16l12.117 12.116c.488.488.488 1.28 0 1.768s-1.28.488-1.768 0L16 17.767 3.884 29.884c-.488.488-1.28.488-1.768 0-.488-.489-.488-1.28 0-1.768L14.232 16 2.116 3.884c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L16 14.232 28.116 2.116z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkFilled32.category = 'Interface General';

export default XMarkFilled32;
