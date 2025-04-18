import * as React from 'react';
import { IconProps } from './types';

export const Bold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.82812 8H8.83466C10.3074 8 11.5013 6.80607 11.5013 5.33333V5.16667C11.5013 3.69391 10.3074 2.5 8.83466 2.5H4.49479C4.1266 2.5 3.82812 2.79848 3.82812 3.16667V8ZM3.82812 8V12.8333C3.82812 13.2015 4.1266 13.5 4.49479 13.5H8.33466M8.66813 13.5H9.50146C10.9742 13.5 12.1681 12.3061 12.1681 10.8333V10.6667C12.1681 9.19393 10.9742 8 9.50146 8H8.66813"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bold16;
