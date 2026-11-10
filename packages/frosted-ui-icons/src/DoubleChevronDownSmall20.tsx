import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmall20"
      {...props}
    >
      <path
        d="M13.636 9.723c.293-.293.768-.293 1.06 0 .294.293.293.768 0 1.06l-3.87 3.875c-.456.456-1.196.456-1.652 0l-3.87-3.874c-.293-.293-.293-.768 0-1.06.292-.294.767-.294 1.06 0L10 13.36l3.636-3.638zm0-4.503c.293-.293.768-.293 1.06 0 .294.293.293.768 0 1.06l-3.87 3.875c-.456.456-1.196.456-1.652 0L5.304 6.28c-.293-.293-.294-.768 0-1.06.292-.294.767-.294 1.06 0L10 8.857l3.636-3.638z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownSmall20.category = 'Arrows';

export default DoubleChevronDownSmall20;
