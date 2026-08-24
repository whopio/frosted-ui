import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmall24"
      {...props}
    >
      <path
        d="M18.72 6.47c.293-.293.768-.293 1.061 0 .292.293.292.768 0 1.06l-10.5 10.5c-.141.14-.332.22-.531.22s-.39-.08-.53-.22l-4.25-4.25c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l3.72 3.72 9.97-9.97z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmall24.category = 'Checkmarks';

export default CheckmarkSmall24;
