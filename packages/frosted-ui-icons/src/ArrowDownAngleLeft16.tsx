import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.25 2.5C14.6642 2.5 15 2.83579 15 3.25V8.5C15 9.60457 14.1046 10.5 13 10.5H3.6182L5.75491 12.4453C6.06111 12.7242 6.08347 13.1986 5.80472 13.5049C5.52586 13.811 5.05139 13.8334 4.74515 13.5547L1.24515 10.3672C1.09096 10.2268 1.00203 10.0279 1.00003 9.81934C0.998132 9.61092 1.08303 9.41086 1.23441 9.26758L4.73441 5.95508C5.03524 5.67042 5.51024 5.68358 5.79495 5.98438C6.07962 6.28522 6.06648 6.76022 5.76566 7.04492L3.70023 9H13C13.2762 9 13.5 8.77614 13.5 8.5V3.25C13.5 2.83581 13.8358 2.50003 14.25 2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeft16.category = 'Arrows';

export default ArrowDownAngleLeft16;
