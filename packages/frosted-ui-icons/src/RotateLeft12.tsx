import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.1202 7.375C2.6865 8.97715 4.21445 10.125 6.0105 10.125C8.28867 10.125 10.1355 8.27815 10.1355 6C10.1355 3.72182 8.28867 1.875 6.0105 1.875C4.6019 1.875 3.66045 2.47719 2.75 3.50446M2.375 1.3125V3.625C2.375 3.83211 2.5429 4 2.75 4L5.3125 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateLeft12;
