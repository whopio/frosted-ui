import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRight12"
      {...props}
    >
      <path
        d="M5.571 2.278c-.292-.292-.292-.767 0-1.06.293-.293.768-.293 1.06 0l4.074 4.073c.39.39.39 1.024 0 1.414l-4.073 4.073c-.293.293-.768.293-1.06 0-.293-.293-.293-.767 0-1.06l3.719-3.72-3.72-3.72zm-4.35 0c-.292-.293-.292-.767 0-1.06.294-.293.768-.293 1.061 0L6.355 5.29c.39.39.39 1.024 0 1.414l-4.073 4.073c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l3.72-3.72-3.72-3.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight12.category = 'Arrows';

export default DoubleChevronRight12;
