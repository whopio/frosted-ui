import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.632 4.28159C6.11993 3.79341 6.12008 3.00209 5.632 2.51401C5.14389 2.02635 4.35246 2.02622 3.86442 2.51401L1.44157 4.93686C0.855893 5.52254 0.856109 6.47312 1.44157 7.05893L3.86442 9.48178C4.35258 9.96994 5.14384 9.96994 5.632 9.48178C6.12002 8.99362 6.12011 8.20232 5.632 7.71421L3.91618 5.99839L5.632 4.28159ZM10.632 4.28159C11.1199 3.79341 11.1201 3.00209 10.632 2.51401C10.1439 2.02635 9.35246 2.02622 8.86442 2.51401L6.44157 4.93686C5.85589 5.52254 5.85611 6.47312 6.44157 7.05893L8.86442 9.48178C9.35258 9.96994 10.1438 9.96994 10.632 9.48178C11.12 8.99362 11.1201 8.20232 10.632 7.71421L8.91618 5.99839L10.632 4.28159Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled12.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled12;
