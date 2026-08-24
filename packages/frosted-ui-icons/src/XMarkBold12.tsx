import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBold12"
      {...props}
    >
      <path
        d="M9.293 1.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L7.414 6l3.293 3.292c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L6 7.414l-3.293 3.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L4.586 6 1.293 2.707c-.39-.39-.39-1.024 0-1.415.39-.39 1.024-.39 1.414 0L6 4.586l3.293-3.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBold12.category = 'Interface General';

export default XMarkBold12;
