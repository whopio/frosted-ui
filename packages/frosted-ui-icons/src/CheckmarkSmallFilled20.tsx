import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallFilled20"
      {...props}
    >
      <path
        d="M14.866 5.616c.488-.488 1.28-.488 1.768 0 .488.489.488 1.28 0 1.768l-8 8c-.488.488-1.28.488-1.768 0l-3.5-3.5c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l2.616 2.617 7.116-7.117z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled20.category = 'Checkmarks';

export default CheckmarkSmallFilled20;
