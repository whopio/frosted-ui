import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallFilled16"
      {...props}
    >
      <path
        d="M11.615 4.366c.488-.488 1.28-.488 1.769 0 .487.488.488 1.28 0 1.768l-6 6c-.488.488-1.28.488-1.769 0l-2.999-3c-.488-.489-.488-1.28 0-1.768s1.28-.488 1.768 0l2.115 2.116 5.116-5.116z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkSmallFilled16.category = 'Checkmarks';

export default CheckmarkSmallFilled16;
