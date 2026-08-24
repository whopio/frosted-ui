import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBold32"
      {...props}
    >
      <path
        d="M12.113 2.708c-.39-.39-.39-1.025 0-1.415.39-.39 1.024-.39 1.414 0l13.414 13.414c.715.714.715 1.874 0 2.589L13.527 30.71c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l13.294-13.294L12.113 2.708zm-7.296 0c-.39-.39-.39-1.025 0-1.415.39-.39 1.024-.39 1.414 0l13.414 13.414c.715.714.715 1.874 0 2.589L6.231 30.71c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l13.294-13.294L4.817 2.708z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold32.category = 'Arrows';

export default DoubleChevronRightBold32;
