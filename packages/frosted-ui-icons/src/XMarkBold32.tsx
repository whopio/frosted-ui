import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBold32"
      {...props}
    >
      <path
        d="M28.293 2.293c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L17.414 16l12.293 12.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L16 17.414 3.707 29.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L14.586 16 2.293 3.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L16 14.586 28.293 2.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBold32.category = 'Interface General';

export default XMarkBold32;
