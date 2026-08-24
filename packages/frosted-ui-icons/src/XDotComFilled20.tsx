import * as React from 'react';
import { IconProps } from './types';

export const XDotComFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XDotComFilled20"
      {...props}
    >
      <path
        d="M14.503 2.917h2.401l-5.246 6 6.172 8.166h-4.833l-3.785-4.952-4.332 4.952H2.477l5.612-6.418-5.921-7.748h4.956l3.421 4.526 3.958-4.526z"
        fill={color}
      />
    </svg>
  );
};

XDotComFilled20.category = 'Social & Brands';

export default XDotComFilled20;
