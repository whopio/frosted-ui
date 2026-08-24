import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmall32"
      {...props}
    >
      <path
        d="M24.72 9.47c.293-.293.767-.293 1.06 0 .293.293.293.768 0 1.06l-13.5 13.5c-.293.293-.768.293-1.06 0l-6-6c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l5.47 5.47L24.72 9.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmall32.category = 'Checkmarks';

export default CheckmarkSmall32;
