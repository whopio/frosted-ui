import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBold12"
      {...props}
    >
      <path
        d="M7.543 3.043c.391-.39 1.024-.39 1.415 0 .39.39.39 1.023 0 1.414L7.414 6l1.544 1.544c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.415 0L6 7.415 4.458 8.957c-.391.39-1.025.39-1.416 0-.39-.39-.39-1.024 0-1.414L4.585 6 3.043 4.458c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.415 0L6 4.586l1.543-1.543z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBold12.category = 'Interface General';

export default XMarkSmallBold12;
