import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone32 = ({
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
        d="M13 25.6666H19M11.6666 29.6666H20.3333C22.5425 29.6666 24.3333 27.8758 24.3333 25.6666V6.33331C24.3333 4.12418 22.5425 2.33331 20.3333 2.33331H11.6666C9.45749 2.33331 7.66663 4.12418 7.66663 6.33331V25.6666C7.66663 27.8758 9.45749 29.6666 11.6666 29.6666Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobilePhone32;
