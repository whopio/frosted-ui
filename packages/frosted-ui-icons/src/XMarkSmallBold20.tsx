import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBold20"
      {...props}
    >
      <path
        d="M13.294 5.292c.39-.39 1.024-.39 1.414 0 .39.39.39 1.025 0 1.415L11.414 10l3.294 3.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L10 11.414l-3.293 3.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L8.586 10 5.293 6.707c-.39-.39-.39-1.024 0-1.415.39-.39 1.024-.39 1.414 0L10 8.586l3.294-3.294z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBold20.category = 'Interface General';

export default XMarkSmallBold20;
