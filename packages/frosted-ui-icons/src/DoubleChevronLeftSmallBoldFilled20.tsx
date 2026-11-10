import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBoldFilled20"
      {...props}
    >
      <path
        d="M10.307 6.893c.585-.585.585-1.535 0-2.12-.586-.586-1.536-.586-2.121 0l-3.874 3.87c-.75.749-.75 1.964 0 2.712l3.874 3.871c.585.586 1.535.586 2.12 0 .586-.586.586-1.535 0-2.12L7.2 10l3.108-3.107zm5.503 0c.585-.585.585-1.535 0-2.12-.586-.586-1.536-.586-2.122 0l-3.874 3.87c-.748.749-.748 1.964 0 2.712l3.874 3.871c.586.586 1.536.586 2.122 0 .585-.586.585-1.535 0-2.12L12.702 10l3.108-3.107z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled20;
