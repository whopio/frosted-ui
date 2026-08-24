import * as React from 'react';
import { IconProps } from './types';

export const BountiesBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BountiesBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm0 1.9c3.092 0 5.6 2.508 5.6 5.6 0 3.092-2.508 5.6-5.6 5.6-3.092 0-5.6-2.508-5.6-5.6 0-3.092 2.508-5.6 5.6-5.6zm0 2c-1.988 0-3.6 1.612-3.6 3.6s1.612 3.6 3.6 3.6 3.6-1.612 3.6-3.6-1.612-3.6-3.6-3.6zm0 1.85c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

BountiesBold20.category = 'Interface General';

export default BountiesBold20;
