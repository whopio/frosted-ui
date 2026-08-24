import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallFilled24"
      {...props}
    >
      <path
        d="M16.116 6.116c.488-.487 1.28-.488 1.768 0 .488.489.488 1.28 0 1.768L13.768 12l4.116 4.116c.488.489.488 1.28 0 1.768s-1.28.488-1.768 0L12 13.768l-4.116 4.116c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L10.232 12 6.116 7.884c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L12 10.233l4.116-4.117z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallFilled24.category = 'Interface General';

export default XMarkSmallFilled24;
