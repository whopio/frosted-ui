import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmall12"
      {...props}
    >
      <path
        d="M8.47 3.72c.293-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-4 4c-.293.293-.767.293-1.06 0l-2-2c-.293-.292-.293-.768 0-1.06.293-.293.767-.293 1.06 0L5 7.188l3.47-3.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmall12.category = 'Checkmarks';

export default CheckmarkSmall12;
