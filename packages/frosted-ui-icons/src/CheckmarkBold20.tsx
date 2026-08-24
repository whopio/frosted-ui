import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBold20"
      {...props}
    >
      <path
        d="M17.293 4.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-11 11C7.519 16.895 7.265 17 7 17c-.265 0-.52-.105-.707-.293l-5-5c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L7 14.586 17.293 4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold20.category = 'Checkmarks';

export default CheckmarkBold20;
