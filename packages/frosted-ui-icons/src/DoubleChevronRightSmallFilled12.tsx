import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.36849 4.28159C5.88056 3.79341 5.88041 3.00209 6.36849 2.51401C6.8566 2.02635 7.64803 2.02622 8.13607 2.51401L10.5589 4.93686C11.1446 5.52254 11.1444 6.47312 10.5589 7.05893L8.13607 9.48178C7.64791 9.96994 6.85664 9.96994 6.36849 9.48178C5.88047 8.99362 5.88038 8.20232 6.36849 7.71421L8.08431 5.99839L6.36849 4.28159ZM1.36849 4.28159C0.880563 3.79341 0.880409 3.00209 1.36849 2.51401C1.8566 2.02635 2.64803 2.02622 3.13607 2.51401L5.55892 4.93686C6.1446 5.52254 6.14438 6.47312 5.55892 7.05893L3.13607 9.48178C2.64791 9.96994 1.85664 9.96994 1.36849 9.48178C0.880472 8.99362 0.88038 8.20232 1.36849 7.71421L3.08431 5.99839L1.36849 4.28159Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled12.category = 'Arrows';

export default DoubleChevronRightSmallFilled12;
