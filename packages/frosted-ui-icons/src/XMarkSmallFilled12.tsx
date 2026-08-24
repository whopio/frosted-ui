import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallFilled12"
      {...props}
    >
      <path
        d="M7.367 2.866c.488-.488 1.28-.488 1.767 0 .488.488.488 1.28 0 1.767L7.767 6l1.367 1.367c.488.488.488 1.28 0 1.767-.488.488-1.28.488-1.767 0L6 7.768 4.634 9.133c-.488.489-1.28.489-1.768 0-.488-.488-.488-1.28 0-1.767L4.232 6 2.866 4.634c-.488-.488-.488-1.279 0-1.767s1.28-.488 1.768 0L6 4.232l1.367-1.366z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallFilled12.category = 'Interface General';

export default XMarkSmallFilled12;
