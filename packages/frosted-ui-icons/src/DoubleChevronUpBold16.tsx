import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.2918 8.55808C13.6823 8.94857 14.3154 8.94851 14.7059 8.55808C15.0963 8.16754 15.0964 7.53449 14.7059 7.14401L8.96274 1.40085C8.43062 0.869058 7.56804 0.868939 7.03598 1.40085L1.29282 7.14401C0.902385 7.53445 0.902555 8.16753 1.29282 8.55808C1.68335 8.9486 2.31636 8.9486 2.70688 8.55808L7.99888 3.26608L13.2918 8.55808ZM13.2918 14.7065C13.6823 15.097 14.3154 15.0969 14.7059 14.7065C15.0964 14.316 15.0964 13.683 14.7059 13.2925L8.96274 7.54929C8.43058 7.0173 7.56807 7.01719 7.03598 7.54929L1.29282 13.2925C0.902369 13.6829 0.902417 14.316 1.29282 14.7065C1.68334 15.097 2.31636 15.097 2.70688 14.7065L7.99888 9.41452L13.2918 14.7065Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold16.category = 'Arrows';

export default DoubleChevronUpBold16;
