import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBold24"
      {...props}
    >
      <path
        d="M16.293 12.5c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414l-4.646-4.647c-.586-.585-1.535-.585-2.121 0l-4.647 4.647c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L12 8.207l4.293 4.293zm0 5.25c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414l-4.646-4.647c-.586-.585-1.535-.585-2.121 0l-4.647 4.647c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L12 13.457l4.293 4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold24.category = 'Arrows';

export default DoubleChevronUpSmallBold24;
