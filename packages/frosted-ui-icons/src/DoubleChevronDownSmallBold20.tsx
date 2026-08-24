import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBold20"
      {...props}
    >
      <path
        d="M13.46 9.793c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414l-3.871 3.874c-.553.553-1.452.553-2.005 0l-3.871-3.874c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L10 13.253l3.46-3.46zm0-5c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414l-3.871 3.874c-.553.553-1.452.553-2.005 0L5.127 6.207c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L10 8.253l3.46-3.46z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold20.category = 'Arrows';

export default DoubleChevronDownSmallBold20;
