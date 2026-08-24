import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmallBoldFilled20"
      {...props}
    >
      <path
        d="M9.693 6.894c-.586-.586-.586-1.536 0-2.122.585-.585 1.535-.585 2.12 0l3.875 3.872c.749.748.749 1.963 0 2.711l-3.874 3.872c-.586.585-1.536.585-2.121 0-.586-.586-.586-1.536 0-2.122L12.8 10 9.693 6.894zm-5.503 0c-.586-.586-.586-1.536 0-2.122.585-.585 1.535-.585 2.12 0l3.875 3.872c.749.748.749 1.963 0 2.711L6.31 15.227c-.586.585-1.536.585-2.121 0-.586-.586-.586-1.536 0-2.122L7.297 10 4.19 6.894z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronRightSmallBoldFilled20;
