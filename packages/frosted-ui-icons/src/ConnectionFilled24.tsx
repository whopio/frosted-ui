import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.854 14.4501C24.3825 15.3106 24.3818 17.5119 22.853 18.372L13.5903 23.582C12.5987 24.1395 11.3871 24.139 10.3969 23.579L1.18795 18.3691C-0.334436 17.5076 -0.334197 15.3148 1.18795 14.4531L3.97994 12.872L9.6567 16.083C11.1042 16.9018 12.8752 16.9041 14.3247 16.0888L20.0463 12.8701L22.854 14.4501ZM10.396 0.442327C11.3864 -0.118035 12.5984 -0.119551 13.5903 0.438421L22.854 5.65033C24.382 6.51094 24.3816 8.71216 22.853 9.57221L13.5903 14.7822C12.5988 15.3399 11.3872 15.339 10.3969 14.7792L1.18795 9.56928C-0.334824 8.70784 -0.334745 6.51486 1.18795 5.65326L10.396 0.442327Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ConnectionFilled24.category = 'Interface General';

export default ConnectionFilled24;
