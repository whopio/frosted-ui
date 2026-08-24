import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkFilled20"
      {...props}
    >
      <path
        d="M16.116 2.116c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768L11.767 10l6.117 6.116c.488.488.488 1.28 0 1.768s-1.28.488-1.768 0L10 11.767l-6.116 6.117c-.488.488-1.28.488-1.768 0-.488-.489-.488-1.28 0-1.768L8.232 10 2.116 3.884c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L10 8.232l6.116-6.116z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkFilled20.category = 'Interface General';

export default XMarkFilled20;
