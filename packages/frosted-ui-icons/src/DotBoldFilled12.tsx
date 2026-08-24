import * as React from 'react';
import { IconProps } from './types';

export const DotBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DotBoldFilled12"
      {...props}
    >
      <path d="M3 6c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" fill={color} />
    </svg>
  );
};

DotBoldFilled12.category = 'Interface General';

export default DotBoldFilled12;
