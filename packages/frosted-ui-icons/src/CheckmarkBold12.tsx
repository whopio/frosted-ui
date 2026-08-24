import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBold12"
      {...props}
    >
      <path
        d="M10.292 2.042c.39-.39 1.024-.39 1.415 0 .39.39.39 1.025 0 1.415l-7 7c-.188.187-.442.293-.707.293-.265 0-.52-.106-.707-.294l-3-2.999c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L4 8.335l6.292-6.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold12.category = 'Checkmarks';

export default CheckmarkBold12;
