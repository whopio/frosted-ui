import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ConnectionFilled16"
      {...props}
    >
      <path
        d="M15.469 9.894c.706.429.706 1.454-.001 1.882l-6.565 3.972c-.557.337-1.255.336-1.812-.001l-6.56-3.97c-.707-.429-.708-1.454-.002-1.883l1.678-1.016 4.108 2.487c1.035.626 2.331.627 3.366.001l4.11-2.488 1.678 1.016zM7.092.253c.557-.337 1.255-.337 1.812 0l6.566 3.974c.707.429.706 1.455-.001 1.883l-6.565 3.97c-.557.338-1.255.338-1.812 0L.532 6.11C-.176 5.68-.177 4.655.53 4.226L7.092.253z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ConnectionFilled16.category = 'Interface General';

export default ConnectionFilled16;
