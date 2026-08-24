import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBold32"
      {...props}
    >
      <path
        d="M22.292 8.293c.39-.39 1.024-.39 1.415 0 .39.39.39 1.024 0 1.414L17.414 16l6.293 6.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.415 0L16 17.414l-6.293 6.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L14.585 16 8.293 9.707c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0L16 14.585l6.292-6.292z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallBold32.category = 'Interface General';

export default XMarkSmallBold32;
