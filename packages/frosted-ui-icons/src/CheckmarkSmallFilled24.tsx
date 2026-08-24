import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallFilled24"
      {...props}
    >
      <path
        d="M18.366 6.116c.488-.488 1.28-.488 1.769 0 .487.488.487 1.28 0 1.768l-10.501 10.5c-.235.234-.553.366-.884.366-.331 0-.65-.132-.884-.366l-4.25-4.25c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l3.366 3.366 9.616-9.616z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled24.category = 'Checkmarks';

export default CheckmarkSmallFilled24;
