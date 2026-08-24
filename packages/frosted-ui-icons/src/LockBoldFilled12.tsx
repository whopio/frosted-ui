import * as React from 'react';
import { IconProps } from './types';

export const LockBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c2.21 0 4 1.79 4 4v1.053c.89.455 1.5 1.379 1.5 2.447v1.75c0 1.519-1.231 2.75-2.75 2.75h-5.5C1.731 12 .5 10.769.5 9.25V7.5c0-1.068.61-1.992 1.5-2.447V4c0-2.21 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2v.75h4V4c0-1.105-.895-2-2-2z"
        fill={color}
      />
    </svg>
  );
};

LockBoldFilled12.category = 'Security';

export default LockBoldFilled12;
