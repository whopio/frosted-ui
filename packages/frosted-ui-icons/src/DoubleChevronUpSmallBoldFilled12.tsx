import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.7167 5.62989C8.20488 6.11782 8.9962 6.11797 9.48428 5.62989C9.97194 5.14178 9.97207 4.35035 9.48428 3.86232L7.06143 1.43946C6.47575 0.853787 5.52517 0.854003 4.93936 1.43946L2.51651 3.86232C2.02835 4.35047 2.02835 5.14174 2.51651 5.62989C3.00467 6.11791 3.79598 6.118 4.28409 5.62989L5.99991 3.91407L7.7167 5.62989ZM7.7167 10.6299C8.20488 11.1178 8.9962 11.118 9.48428 10.6299C9.97194 10.1418 9.97207 9.35035 9.48428 8.86232L7.06143 6.43946C6.47575 5.85379 5.52517 5.854 4.93936 6.43946L2.51651 8.86232C2.02835 9.35047 2.02835 10.1417 2.51651 10.6299C3.00467 11.1179 3.79598 11.118 4.28409 10.6299L5.99991 8.91407L7.7167 10.6299Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled12.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled12;
