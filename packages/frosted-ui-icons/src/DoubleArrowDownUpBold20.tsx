import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUpBold20"
      {...props}
    >
      <path
        d="M10.293 5.294c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L14 4.415V18c0 .552.448 1 1 1 .553 0 1-.448 1-1V4.415l2.293 2.293c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414l-4-4C15.52 1.106 15.265 1 15 1c-.265 0-.52.105-.707.293l-4 4zm-10 8c-.39.39-.39 1.023 0 1.414l4 4c.188.187.442.293.707.293.266 0 .52-.106.707-.293l4-4c.39-.39.39-1.024 0-1.414-.39-.39-1.023-.39-1.414 0L6 15.586V2.001c0-.553-.447-1-1-1-.552 0-1 .447-1 1v13.585l-2.293-2.292c-.39-.39-1.023-.39-1.414 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUpBold20.category = 'Arrows';

export default DoubleArrowDownUpBold20;
