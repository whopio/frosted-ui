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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.4082 0C8.31377 0 8.94689 0.668803 9.2002 1.32715C9.63339 2.45312 10.7243 3.25 12 3.25C13.2757 3.25 14.3666 2.45312 14.7998 1.32715C15.0531 0.668803 15.6862 0 16.5918 0H18.75C20.5449 0 22 1.45507 22 3.25V20.75C22 22.5449 20.5449 24 18.75 24H16.5918C15.6862 24 15.0531 23.3312 14.7998 22.6729C14.3666 21.5469 13.2757 20.75 12 20.75C10.7243 20.75 9.63339 21.5469 9.2002 22.6729C8.94689 23.3312 8.31377 24 7.4082 24H5.25C3.45507 24 2 22.5449 2 20.75V3.25C2 1.45507 3.45507 0 5.25 0H7.4082Z"
        fill={color}
      />
    </svg>
  );
};

CouponFilled24.category = 'Money & Shopping';

export default CouponFilled24;
