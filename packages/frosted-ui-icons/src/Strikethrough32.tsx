import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M23.437 9.14817C23.1028 7.54158 21.7052 3.66669 16.0022 3.66669C10.5207 3.66669 8.46519 7.23123 8.46519 9.83335C8.46519 13.8836 12.206 14.9411 16.0022 15.9543M7.95829 22.8519C8.47116 24.4584 10.2992 28.3334 16.0022 28.3334C21.4837 28.3334 23.8818 24.7688 23.8818 22.1667C23.8818 21.1643 23.6528 20.3454 23.2504 19.6648M3.66663 16H28.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Strikethrough32;
