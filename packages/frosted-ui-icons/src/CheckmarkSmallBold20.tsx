import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBold20"
      {...props}
    >
      <path
        d="M15.043 5.793c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-8 8c-.39.39-1.024.39-1.414 0l-3.5-3.5c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0l2.793 2.793 7.293-7.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold20.category = 'Checkmarks';

export default CheckmarkSmallBold20;
