import * as React from 'react';
import { IconProps } from './types';

export const CouponExpiredBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponExpiredBoldFilled24"
      {...props}
    >
      <path
        d="M7.082 0c.955 0 1.648.654 1.954 1.333C9.546 2.465 10.682 3.25 12 3.25s2.454-.785 2.964-1.917C15.27.654 15.964 0 16.918 0H18.5C20.433 0 22 1.567 22 3.5v17c0 1.933-1.567 3.5-3.5 3.5h-1.582c-.955 0-1.648-.654-1.954-1.333-.51-1.132-1.646-1.917-2.964-1.917s-2.454.785-2.964 1.917c-.306.679-1 1.333-1.954 1.333H5.5C3.567 24 2 22.433 2 20.5v-17C2 1.567 3.567 0 5.5 0h1.582zm9 7.923c-.39-.39-1.024-.39-1.414 0L12 10.59 9.332 7.923c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.023 0 1.414l2.668 2.668-2.668 2.668c-.39.39-.39 1.023 0 1.414.39.39 1.024.39 1.414 0L12 13.419l2.668 2.668c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414l-2.668-2.668 2.668-2.668c.39-.39.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

CouponExpiredBoldFilled24.category = 'Money & Shopping';

export default CouponExpiredBoldFilled24;
