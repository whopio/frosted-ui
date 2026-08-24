import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBold16"
      {...props}
    >
      <path
        d="M10.676 8.043c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414l-3.147 3.147c-.52.521-1.365.521-1.886 0L3.91 9.457c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l2.675 2.676 2.677-2.676zm0-4.75c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414L8.943 7.854c-.52.521-1.365.521-1.886 0L3.91 4.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l2.675 2.676 2.677-2.676z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold16.category = 'Arrows';

export default DoubleChevronDownSmallBold16;
