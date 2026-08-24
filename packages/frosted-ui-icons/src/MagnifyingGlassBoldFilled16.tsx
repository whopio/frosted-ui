import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlassBoldFilled16"
      {...props}
    >
      <path
        d="M7.001.751c3.452 0 6.25 2.798 6.25 6.25 0 1.182-.33 2.287-.9 3.23l2.46 2.457c.585.586.585 1.537 0 2.122-.586.586-1.537.586-2.123 0l-2.458-2.458c-.942.57-2.047.899-3.229.899-3.452 0-6.25-2.798-6.25-6.25S3.549.751 7.001.751zm0 3c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25 3.25-1.455 3.25-3.25-1.455-3.25-3.25-3.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled16.category = 'Interface General';

export default MagnifyingGlassBoldFilled16;
