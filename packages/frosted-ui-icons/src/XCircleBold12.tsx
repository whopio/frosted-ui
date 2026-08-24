import * as React from 'react';
import { IconProps } from './types';

export const XCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm.707 1.879c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414L7.414 6l.707.707c.39.39.39 1.024 0 1.414-.39.39-1.023.39-1.414 0L6 7.414l-.707.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L4.586 6l-.707-.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L6 4.586l.707-.707z"
        fill={color}
      />
    </svg>
  );
};

XCircleBold12.category = 'Interface General';

export default XCircleBold12;
