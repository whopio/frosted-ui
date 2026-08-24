import * as React from 'react';
import { IconProps } from './types';

export const Triangle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle12"
      {...props}
    >
      <path
        d="M.926 9.491l4.012-7.623c.45-.855 1.674-.855 2.124 0l4.012 7.623c.42.8-.159 1.759-1.062 1.759H1.988c-.903 0-1.483-.96-1.062-1.759z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle12.category = 'Interface General';

export default Triangle12;
