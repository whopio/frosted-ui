import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownBold12"
      {...props}
    >
      <path
        d="M6.293 9.69c-.39-.391-.39-1.024 0-1.415.39-.39 1.023-.39 1.414 0L8 8.568V1c0-.552.448-1 1-1s1 .448 1 1v7.568l.293-.293c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-2 2c-.39.39-1.024.39-1.414 0l-2-2zm-6-5.982c-.39-.39-.39-1.024 0-1.414l2-2.001c.39-.39 1.023-.39 1.414 0l2 2.001c.391.39.391 1.024 0 1.414-.39.39-1.023.39-1.413 0L4 3.414V11c0 .552-.448 1-1 1s-1-.448-1-1V3.415l-.293.293c-.39.39-1.024.39-1.414 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownBold12.category = 'Arrows';

export default DoubleArrowUpDownBold12;
