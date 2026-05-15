import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.54289 5.8925C9.93339 5.5022 10.5665 5.50215 10.957 5.8925C11.3474 6.28297 11.3473 6.91603 10.957 7.30657L6.88371 11.3798C6.39556 11.8679 5.60429 11.8679 5.11614 11.3798L1.04289 7.30657C0.652477 6.91603 0.652405 6.28299 1.04289 5.8925C1.4334 5.5022 2.06648 5.50215 2.45696 5.8925L5.99992 9.43547L9.54289 5.8925ZM9.54289 0.542893C9.93341 0.152371 10.5664 0.152376 10.957 0.542893C11.3474 0.933424 11.3475 1.56646 10.957 1.95696L6.88371 6.0302C6.39559 6.51831 5.60429 6.51826 5.11614 6.0302L1.04289 1.95696C0.652369 1.56643 0.652369 0.933417 1.04289 0.542893C1.43342 0.152369 2.06643 0.152369 2.45696 0.542893L5.99992 4.08586L9.54289 0.542893Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold12.category = 'Arrows';

export default DoubleChevronDownBold12;
