import * as React from 'react';
import { IconProps } from './types';

export const FullScreen32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11 28.5H9.5C6.18629 28.5 3.5 25.8137 3.5 22.5V21M21 28.5H22.5C25.8137 28.5 28.5 25.8137 28.5 22.5V21M21 3.5H22.5C25.8137 3.5 28.5 6.18629 28.5 9.5V11M11 3.5H9.5C6.18629 3.5 3.5 6.18629 3.5 9.5V11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FullScreen32;
