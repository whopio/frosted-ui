import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 18L13.4475 13.4475M15.3 8.65C15.3 12.3227 12.3227 15.3 8.65 15.3C4.97731 15.3 2 12.3227 2 8.65C2 4.97731 4.97731 2 8.65 2C12.3227 2 15.3 4.97731 15.3 8.65Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

MagnifyingGlassFilled20.category = 'Interface General';

export default MagnifyingGlassFilled20;
