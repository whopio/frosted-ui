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
        d="M6.54527 4.10481C6.15497 3.71427 6.15482 3.0812 6.54527 2.69075C6.93574 2.3007 7.56892 2.30059 7.95933 2.69075L10.3822 5.11458C10.8702 5.60263 10.87 6.39398 10.3822 6.88216L7.95933 9.30501C7.5688 9.69553 6.93579 9.69553 6.54527 9.30501C6.15488 8.91447 6.15479 8.28142 6.54527 7.89094L8.43784 5.99837L6.54527 4.10481ZM1.54527 4.10481C1.15497 3.71427 1.15482 3.0812 1.54527 2.69075C1.93575 2.3007 2.56892 2.30059 2.95933 2.69075L5.38218 5.11458C5.87021 5.60263 5.87002 6.39398 5.38218 6.88216L2.95933 9.30501C2.5688 9.69553 1.93579 9.69553 1.54527 9.30501C1.15488 8.91447 1.15479 8.28142 1.54527 7.89094L3.43784 5.99837L1.54527 4.10481Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold12.category = 'Arrows';

export default DoubleChevronRightSmallBold12;
