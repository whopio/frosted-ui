import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBoldFilled20"
      {...props}
    >
      <path
        d="M13.106 9.693c.586-.586 1.536-.586 2.121 0 .586.585.586 1.535 0 2.121l-3.87 3.874c-.75.749-1.964.749-2.712 0l-3.872-3.874c-.585-.586-.585-1.536 0-2.121.586-.586 1.536-.586 2.122 0L10 12.8l3.106-3.107zm0-5.503c.586-.586 1.536-.586 2.121 0 .586.586.586 1.535 0 2.121l-3.87 3.874c-.75.749-1.964.749-2.712 0L4.773 6.311c-.585-.586-.585-1.535 0-2.121.586-.586 1.536-.586 2.122 0L10 7.297l3.106-3.107z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled20;
