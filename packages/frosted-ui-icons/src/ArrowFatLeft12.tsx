import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeft12"
      {...props}
    >
      <path
        d="M6.45 3.75h4.05c.414 0 .75.336.75.75v3c0 .414-.336.75-.75.75H6.45c-.11 0-.2.09-.2.2v2.12c0 .26-.31.397-.502.221L.985 6.443c-.26-.238-.26-.648 0-.886l4.763-4.348c.192-.176.502-.04.502.221v2.12c0 .11.09.2.2.2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft12.category = 'Arrows';

export default ArrowFatLeft12;
