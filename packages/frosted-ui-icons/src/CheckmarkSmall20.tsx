import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmall20"
      {...props}
    >
      <path
        d="M15.22 5.97c.292-.293.767-.293 1.06 0 .293.293.293.768 0 1.06l-8 8c-.293.293-.768.293-1.06 0l-3.5-3.5c-.293-.292-.293-.767 0-1.06.292-.293.767-.293 1.06 0l2.97 2.97 7.47-7.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmall20.category = 'Checkmarks';

export default CheckmarkSmall20;
