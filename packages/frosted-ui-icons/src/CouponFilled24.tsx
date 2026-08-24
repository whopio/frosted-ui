import * as React from 'react';
import { IconProps } from './types';

export const CouponFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponFilled24"
      {...props}
    >
      <path
        d="M7.408 0C8.314 0 8.947.669 9.2 1.327 9.633 2.453 10.724 3.25 12 3.25c1.276 0 2.367-.797 2.8-1.923C15.053.67 15.686 0 16.592 0h2.158C20.545 0 22 1.455 22 3.25v17.5c0 1.795-1.455 3.25-3.25 3.25h-2.158c-.906 0-1.539-.669-1.792-1.327-.433-1.126-1.524-1.923-2.8-1.923-1.276 0-2.367.797-2.8 1.923C8.947 23.33 8.314 24 7.408 24H5.25C3.455 24 2 22.545 2 20.75V3.25C2 1.455 3.455 0 5.25 0h2.158z"
        fill={color}
      />
    </svg>
  );
};

CouponFilled24.category = 'Money & Shopping';

export default CouponFilled24;
