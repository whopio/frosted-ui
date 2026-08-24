import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallFilled16"
      {...props}
    >
      <path
        d="M10.116 4.115c.488-.487 1.28-.487 1.768 0 .488.488.487 1.28 0 1.769L9.767 8l2.117 2.116c.487.488.487 1.28 0 1.768-.488.488-1.28.488-1.768 0L8 9.768l-2.116 2.116c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L6.231 8 4.115 5.884c-.488-.488-.488-1.28 0-1.769.488-.487 1.28-.487 1.768 0l2.116 2.118 2.117-2.118z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallFilled16.category = 'Interface General';

export default XMarkSmallFilled16;
