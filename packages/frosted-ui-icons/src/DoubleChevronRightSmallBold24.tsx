import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmallBold24"
      {...props}
    >
      <path
        d="M11.522 7.728c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0l4.646 4.647c.586.585.586 1.535 0 2.12l-4.646 4.647c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l4.293-4.293-4.293-4.293zm-5.25 0c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0l4.646 4.647c.586.585.586 1.535 0 2.12l-4.646 4.647c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l4.293-4.293-4.293-4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold24.category = 'Arrows';

export default DoubleChevronRightSmallBold24;
