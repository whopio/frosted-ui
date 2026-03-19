import * as React from 'react';
import { IconProps } from './types';

export const Dot20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.75 10C5.75 7.65279 7.65279 5.75 10 5.75C12.3472 5.75 14.25 7.65279 14.25 10C14.25 12.3472 12.3472 14.25 10 14.25C7.65279 14.25 5.75 12.3472 5.75 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot20.category = 'Product Icons';

export default Dot20;
