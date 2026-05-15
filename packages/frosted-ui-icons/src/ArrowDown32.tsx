import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M27.4703 18.7805L16.0009 30.25L4.53125 18.7805M16.0009 30.25V1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDown32.category = 'Arrows';

export default ArrowDown32;
