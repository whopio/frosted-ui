import * as React from 'react';
import { IconProps } from './types';

export const CouponBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.95117 0C10.8707 0 11.5719 0.610581 11.8789 1.30859C12.5763 2.89512 14.1601 4 16 4C17.8399 4 19.4237 2.89512 20.1211 1.30859C20.4281 0.610582 21.1293 0 22.0488 0H25C27.2091 0 29 1.79086 29 4V28C29 30.2091 27.2091 32 25 32H22.0488C21.1293 32 20.4281 31.3894 20.1211 30.6914C19.4237 29.1049 17.8399 28 16 28C14.1601 28 12.5763 29.1049 11.8789 30.6914C11.5719 31.3894 10.8707 32 9.95117 32H7C4.79086 32 3 30.2091 3 28V4C3 1.79086 4.79086 0 7 0H9.95117Z"
        fill={color}
      />
    </svg>
  );
};

CouponBoldFilled32.category = 'Money & Shopping';

export default CouponBoldFilled32;
