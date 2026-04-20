import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.54527 4.10475C6.15497 3.71421 6.15482 3.08114 6.54527 2.69069C6.93574 2.30064 7.56892 2.30053 7.95933 2.69069L10.3822 5.11452C10.8702 5.60257 10.87 6.39392 10.3822 6.88209L7.95933 9.30495C7.5688 9.69547 6.93579 9.69547 6.54527 9.30495C6.15488 8.91441 6.15479 8.28136 6.54527 7.89088L8.43784 5.99831L6.54527 4.10475ZM1.54527 4.10475C1.15497 3.71421 1.15482 3.08114 1.54527 2.69069C1.93575 2.30064 2.56892 2.30053 2.95933 2.69069L5.38218 5.11452C5.87021 5.60257 5.87002 6.39392 5.38218 6.88209L2.95933 9.30495C2.5688 9.69547 1.93579 9.69547 1.54527 9.30495C1.15488 8.91441 1.15479 8.28136 1.54527 7.89088L3.43784 5.99831L1.54527 4.10475Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold12.category = 'Arrows';

export default DoubleChevronRightSmallBold12;
