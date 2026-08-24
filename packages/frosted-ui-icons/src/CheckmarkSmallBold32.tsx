import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBold32"
      {...props}
    >
      <path
        d="M24.543 9.293c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-13.5 13.5c-.39.39-1.024.39-1.414 0l-6-6c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l5.293 5.293L24.543 9.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold32.category = 'Checkmarks';

export default CheckmarkSmallBold32;
