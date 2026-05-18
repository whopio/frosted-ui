import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.1161 2.11627C12.6043 1.62843 13.3956 1.62822 13.8837 2.11627C14.3716 2.60434 14.3715 3.39573 13.8837 3.88385L9.76747 8.00006L13.8837 12.1163C14.3715 12.6044 14.3716 13.3958 13.8837 13.8839C13.3956 14.3717 12.6042 14.3717 12.1161 13.8839L7.9999 9.76764L3.88368 13.8839C3.39558 14.3719 2.60427 14.3718 2.11611 13.8839C1.62795 13.3957 1.62797 12.6044 2.11611 12.1163L6.23232 8.00006L2.11611 3.88385C1.62801 3.39575 1.62813 2.60444 2.11611 2.11627C2.60428 1.62829 3.39559 1.62818 3.88368 2.11627L7.9999 6.23248L12.1161 2.11627Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkFilled16.category = 'Interface General';

export default XMarkFilled16;
