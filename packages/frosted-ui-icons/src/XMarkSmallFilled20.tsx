import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallFilled20"
      {...props}
    >
      <path
        d="M13.115 5.115c.488-.487 1.28-.488 1.769 0 .488.489.487 1.28 0 1.769L11.767 10l3.117 3.116c.487.489.487 1.28 0 1.768-.488.488-1.28.488-1.769 0L10 11.768l-3.116 3.116c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L8.231 10 5.115 6.884c-.488-.488-.488-1.28 0-1.769.488-.487 1.28-.487 1.768 0l3.116 3.118 3.116-3.118z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallFilled20.category = 'Interface General';

export default XMarkSmallFilled20;
