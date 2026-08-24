import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBold12"
      {...props}
    >
      <path
        d="M8.293 3.543c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414l-4 4c-.39.39-1.024.39-1.414 0l-2-2c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L5 6.836l3.293-3.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold12.category = 'Checkmarks';

export default CheckmarkSmallBold12;
