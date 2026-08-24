import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkCircleFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm2.78 3.97c-.293-.293-.767-.293-1.06 0L5.125 6.564 4.28 5.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l1.375 1.375c.293.293.767.293 1.06 0L8.78 5.03c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled12.category = 'Checkmarks';

export default CheckmarkCircleFilled12;
