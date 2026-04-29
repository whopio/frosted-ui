import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.71682 5.62992C8.205 6.11785 8.99632 6.118 9.4844 5.62992C9.97206 5.14181 9.97219 4.35038 9.4844 3.86235L7.06155 1.4395C6.47587 0.853818 5.52529 0.854033 4.93948 1.4395L2.51663 3.86235C2.02847 4.3505 2.02847 5.14177 2.51663 5.62992C3.0048 6.11794 3.7961 6.11803 4.28421 5.62992L6.00003 3.9141L7.71682 5.62992ZM7.71682 10.6299C8.205 11.1179 8.99632 11.118 9.4844 10.6299C9.97206 10.1418 9.97219 9.35038 9.4844 8.86235L7.06155 6.4395C6.47587 5.85382 5.52529 5.85403 4.93948 6.4395L2.51663 8.86235C2.02847 9.3505 2.02847 10.1418 2.51663 10.6299C3.0048 11.1179 3.7961 11.118 4.28421 10.6299L6.00003 8.9141L7.71682 10.6299Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled12.category = 'Arrows';

export default DoubleChevronUpSmallFilled12;
