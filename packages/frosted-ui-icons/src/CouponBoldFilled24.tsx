import * as React from 'react';
import { IconProps } from './types';

export const CouponBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.08203 0C8.0368 0.000162187 8.7302 0.653963 9.03613 1.33301C9.54613 2.46509 10.6821 3.25 12 3.25C13.3179 3.25 14.4539 2.46509 14.9639 1.33301C15.2698 0.653962 15.9632 0.000162404 16.918 0H18.5C20.433 1.19209e-07 22 1.567 22 3.5V20.5C22 22.433 20.433 24 18.5 24H16.918C15.9632 23.9998 15.2698 23.346 14.9639 22.667C14.4539 21.5349 13.3179 20.75 12 20.75C10.6821 20.75 9.54613 21.5349 9.03613 22.667C8.7302 23.346 8.0368 23.9998 7.08203 24H5.5C3.567 24 2 22.433 2 20.5V3.5C2 1.567 3.567 1.19209e-07 5.5 0H7.08203Z"
        fill={color}
      />
    </svg>
  );
};

CouponBoldFilled24.category = 'Money & Shopping';

export default CouponBoldFilled24;
