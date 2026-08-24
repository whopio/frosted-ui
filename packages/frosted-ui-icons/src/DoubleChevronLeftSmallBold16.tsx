import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBold16"
      {...props}
    >
      <path
        d="M7.954 5.321c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0L3.393 7.055c-.52.52-.52 1.365 0 1.886l3.147 3.147c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L5.278 7.998l2.676-2.677zm4.75 0c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0L8.143 7.055c-.521.52-.52 1.365 0 1.886l3.147 3.147c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414l-2.676-2.676 2.676-2.677z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold16.category = 'Arrows';

export default DoubleChevronLeftSmallBold16;
