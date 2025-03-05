import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12.4194 3.58068L3.58059 12.4195M3.58059 12.4195L3.75737 5.52522M3.58059 12.4195L10.4749 12.2427"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownLeft16;
