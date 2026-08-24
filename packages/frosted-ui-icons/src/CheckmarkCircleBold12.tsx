import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.293 2.043c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L5.832 8.332c-.39.39-1.024.39-1.414 0L3.043 6.957c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l.668.668 2.168-2.168z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBold12.category = 'Checkmarks';

export default CheckmarkCircleBold12;
