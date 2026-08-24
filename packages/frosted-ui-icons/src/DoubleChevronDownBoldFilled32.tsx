import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownBoldFilled32"
      {...props}
    >
      <path
        d="M28.696 12.69c.586-.586 1.535-.586 2.121 0 .586.585.586 1.535 0 2.12L17.65 27.98c-.91.91-2.386.91-3.296 0L1.19 14.81c-.585-.586-.585-1.536 0-2.121.586-.586 1.536-.586 2.121 0L16 25.384 28.697 12.69zm0-9c.586-.586 1.535-.586 2.121 0 .586.585.586 1.535 0 2.12L17.65 18.98c-.91.91-2.386.91-3.296 0L1.19 5.81c-.585-.586-.585-1.536 0-2.122.586-.585 1.536-.585 2.121 0L16 16.384 28.697 3.689z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBoldFilled32.category = 'Arrows';

export default DoubleChevronDownBoldFilled32;
