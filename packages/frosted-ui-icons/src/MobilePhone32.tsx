import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13 25.6667H19M11.6666 29.6667H20.3333C22.5425 29.6667 24.3333 27.8759 24.3333 25.6667V6.33337C24.3333 4.12424 22.5425 2.33337 20.3333 2.33337H11.6666C9.45749 2.33337 7.66663 4.12424 7.66663 6.33337V25.6667C7.66663 27.8759 9.45749 29.6667 11.6666 29.6667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobilePhone32;
