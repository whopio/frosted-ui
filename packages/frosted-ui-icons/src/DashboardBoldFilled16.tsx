import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.5 1C12.9853 1 15 3.01472 15 5.5V10.5C15 12.9853 12.9853 15 10.5 15H5.5C3.01472 15 1 12.9853 1 10.5V5.5C1 3.01472 3.01472 1 5.5 1H10.5ZM12.3174 5.48828C11.7354 4.89873 10.7858 4.89262 10.1963 5.47461L8.59082 7.05859L8.07715 6.55176L7.94141 6.43066C7.28742 5.90328 6.34936 5.9034 5.69531 6.43066L5.55957 6.55176L3.69629 8.3916C3.10705 8.97362 3.10073 9.92325 3.68262 10.5127C4.26454 11.1018 5.21424 11.1079 5.80371 10.5264L6.81738 9.52441L7.33203 10.0322C8.02976 10.7208 9.15188 10.7208 9.84961 10.0322L12.3037 7.60938C12.8932 7.02743 12.8992 6.07784 12.3174 5.48828Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled16.category = 'Stats & Charts';

export default DashboardBoldFilled16;
