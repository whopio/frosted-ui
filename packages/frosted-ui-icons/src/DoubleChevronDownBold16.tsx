import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.2918 7.44327C13.6823 7.05277 14.3154 7.05283 14.7059 7.44327C15.0963 7.8338 15.0964 8.46685 14.7059 8.85733L8.96274 14.6005C8.43062 15.1323 7.56804 15.1324 7.03598 14.6005L1.29282 8.85733C0.902385 8.46689 0.902555 7.83381 1.29282 7.44327C1.68335 7.05274 2.31636 7.05274 2.70688 7.44327L7.99888 12.7353L13.2918 7.44327ZM13.2918 1.29483C13.6823 0.904343 14.3154 0.904424 14.7059 1.29483C15.0964 1.68535 15.0964 2.31837 14.7059 2.70889L8.96274 8.45205C8.43058 8.98404 7.56807 8.98415 7.03598 8.45205L1.29282 2.70889C0.902369 2.3184 0.902417 1.68535 1.29282 1.29483C1.68334 0.904318 2.31636 0.904338 2.70688 1.29483L7.99888 6.58682L13.2918 1.29483Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold16.category = 'Arrows';

export default DoubleChevronDownBold16;
