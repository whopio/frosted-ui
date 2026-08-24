import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBold16"
      {...props}
    >
      <path
        d="M10.292 4.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L9.414 8l2.292 2.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L7.999 9.414l-2.293 2.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L6.585 8 4.292 5.707c-.39-.39-.39-1.024 0-1.415.39-.39 1.024-.39 1.414 0l2.293 2.294 2.293-2.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBold16.category = 'Interface General';

export default XMarkSmallBold16;
