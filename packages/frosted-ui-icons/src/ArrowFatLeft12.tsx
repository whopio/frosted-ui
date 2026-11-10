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
        d="M10.5 3.75H6.45c-.11 0-.2-.09-.2-.2V1.43c0-.26-.31-.397-.502-.221L.985 5.557c-.26.238-.26.648 0 .886l4.763 4.348c.192.176.502.04.502-.221V8.45c0-.11.09-.2.2-.2h4.05c.414 0 .75-.336.75-.75v-3c0-.414-.336-.75-.75-.75z"
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
