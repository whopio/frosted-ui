import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.54289 6.10353C9.93339 6.49383 10.5665 6.49388 10.957 6.10353C11.3474 5.71307 11.3473 5.08001 10.957 4.68947L6.88371 0.616225C6.39556 0.128093 5.60429 0.128087 5.11614 0.616225L1.04289 4.68947C0.652477 5.08 0.652405 5.71304 1.04289 6.10353C1.4334 6.49384 2.06648 6.49389 2.45696 6.10353L5.99992 2.56056L9.54289 6.10353ZM9.54289 11.4531C9.93341 11.8437 10.5664 11.8437 10.957 11.4531C11.3474 11.0626 11.3475 10.4296 10.957 10.0391L6.88371 5.96583C6.39559 5.47773 5.60429 5.47777 5.11614 5.96583L1.04289 10.0391C0.652369 10.4296 0.652369 11.0626 1.04289 11.4531C1.43342 11.8437 2.06643 11.8437 2.45696 11.4531L5.99992 7.91017L9.54289 11.4531Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold12.category = 'Arrows';

export default DoubleChevronUpBold12;
