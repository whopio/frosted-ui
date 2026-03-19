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
        d="M6.54527 4.10478C6.15497 3.71424 6.15482 3.08117 6.54527 2.69072C6.93574 2.30067 7.56892 2.30056 7.95933 2.69072L10.3822 5.11455C10.8702 5.6026 10.87 6.39395 10.3822 6.88213L7.95933 9.30498C7.5688 9.6955 6.93579 9.6955 6.54527 9.30498C6.15488 8.91444 6.15479 8.28139 6.54527 7.89091L8.43784 5.99834L6.54527 4.10478ZM1.54527 4.10478C1.15497 3.71424 1.15482 3.08117 1.54527 2.69072C1.93575 2.30067 2.56892 2.30056 2.95933 2.69072L5.38218 5.11455C5.87021 5.6026 5.87002 6.39395 5.38218 6.88213L2.95933 9.30498C2.5688 9.6955 1.93579 9.6955 1.54527 9.30498C1.15488 8.91444 1.15479 8.28139 1.54527 7.89091L3.43784 5.99834L1.54527 4.10478Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold12.category = 'Arrows';

export default DoubleChevronRightSmallBold12;
