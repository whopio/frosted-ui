import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M27.4703 13.2195L16.0009 1.75L4.53125 13.2195M16.0009 1.75V30.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp32.category = 'Arrows';

export default ArrowUp32;
