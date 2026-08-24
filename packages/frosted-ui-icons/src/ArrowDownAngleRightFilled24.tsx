import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightFilled24"
      {...props}
    >
      <path
        d="M2.25 3.5C1.56 3.5 1 4.06 1 4.75v8.625C1 15.101 2.4 16.5 4.125 16.5h14.48l-2.213 2.09c-.502.475-.525 1.267-.051 1.768.474.502 1.265.525 1.767.051l4.5-4.25c.25-.236.392-.565.392-.909 0-.344-.142-.673-.392-.91l-4.5-4.25c-.502-.473-1.293-.45-1.767.052s-.451 1.293.05 1.767L18.607 14H4.124c-.345 0-.625-.28-.625-.625V4.75c0-.69-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightFilled24.category = 'Arrows';

export default ArrowDownAngleRightFilled24;
