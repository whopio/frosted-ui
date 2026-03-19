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
        d="M7.71682 5.62989C8.205 6.11782 8.99632 6.11797 9.4844 5.62989C9.97206 5.14178 9.97219 4.35035 9.4844 3.86232L7.06155 1.43946C6.47587 0.853787 5.52529 0.854003 4.93948 1.43946L2.51663 3.86232C2.02847 4.35047 2.02847 5.14174 2.51663 5.62989C3.0048 6.11791 3.7961 6.118 4.28421 5.62989L6.00003 3.91407L7.71682 5.62989ZM7.71682 10.6299C8.205 11.1178 8.99632 11.118 9.4844 10.6299C9.97206 10.1418 9.97219 9.35035 9.4844 8.86232L7.06155 6.43946C6.47587 5.85379 5.52529 5.854 4.93948 6.43946L2.51663 8.86232C2.02847 9.35047 2.02847 10.1417 2.51663 10.6299C3.0048 11.1179 3.7961 11.118 4.28421 10.6299L6.00003 8.91407L7.71682 10.6299Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled12.category = 'Arrows';

export default DoubleChevronUpSmallFilled12;
