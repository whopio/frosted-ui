import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.74997 2.5C1.33576 2.5 0.999969 2.83579 0.999969 3.25V8.5C0.999969 9.60457 1.8954 10.5 2.99997 10.5H12.3818L10.2451 12.4453C9.93889 12.7242 9.91653 13.1986 10.1953 13.5049C10.4741 13.811 10.9486 13.8334 11.2549 13.5547L14.7549 10.3672C14.909 10.2268 14.998 10.0279 15 9.81934C15.0019 9.61092 14.917 9.41086 14.7656 9.26758L11.2656 5.95508C10.9648 5.67042 10.4898 5.68358 10.205 5.98438C9.92038 6.28522 9.93352 6.76022 10.2343 7.04492L12.2998 9H2.99997C2.72383 9 2.49997 8.77614 2.49997 8.5V3.25C2.49997 2.83581 2.16415 2.50003 1.74997 2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRight16.category = 'Arrows';

export default ArrowDownAngleRight16;
