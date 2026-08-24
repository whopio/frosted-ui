import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBold24"
      {...props}
    >
      <path
        d="M16.293 6.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L13.414 12l4.293 4.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L12 13.414l-4.293 4.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L10.586 12 6.293 7.707c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L12 10.586l4.293-4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBold24.category = 'Interface General';

export default XMarkSmallBold24;
