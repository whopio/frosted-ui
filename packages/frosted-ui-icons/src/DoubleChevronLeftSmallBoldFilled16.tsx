import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBoldFilled16"
      {...props}
    >
      <path
        d="M8.059 5.675c.585-.586.585-1.536 0-2.122-.586-.585-1.536-.585-2.121 0L2.79 6.701c-.716.716-.716 1.877 0 2.593l3.147 3.147c.586.586 1.536.586 2.122 0 .585-.586.585-1.535 0-2.12L5.736 7.997 8.06 5.675zm5.25 0c.585-.586.585-1.536 0-2.122-.586-.585-1.536-.585-2.121 0L8.04 6.701c-.716.716-.716 1.877 0 2.593l3.148 3.147c.585.586 1.535.586 2.12 0 .586-.586.586-1.535 0-2.12l-2.322-2.323 2.323-2.323z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled16;
