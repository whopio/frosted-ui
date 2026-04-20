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
        d="M5.632 4.28165C6.11993 3.79348 6.12008 3.00215 5.632 2.51407C5.14389 2.02641 4.35246 2.02629 3.86442 2.51407L1.44157 4.93692C0.855893 5.5226 0.856109 6.47318 1.44157 7.05899L3.86442 9.48184C4.35258 9.97 5.14384 9.97 5.632 9.48184C6.12002 8.99368 6.12011 8.20238 5.632 7.71427L3.91618 5.99845L5.632 4.28165ZM10.632 4.28165C11.1199 3.79348 11.1201 3.00215 10.632 2.51407C10.1439 2.02641 9.35246 2.02629 8.86442 2.51407L6.44157 4.93692C5.85589 5.5226 5.85611 6.47318 6.44157 7.05899L8.86442 9.48184C9.35258 9.97 10.1438 9.97 10.632 9.48184C11.12 8.99368 11.1201 8.20238 10.632 7.71427L8.91618 5.99845L10.632 4.28165Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBoldFilled12.category = 'Arrows';

export default DoubleChevronLeftSmallBoldFilled12;
