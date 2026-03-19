import * as React from 'react';
import { IconProps } from './types';

export const CouponBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.10254 0C6.82558 0 7.35502 0.491476 7.55371 1.04883L7.58887 1.16113L7.65137 1.35645C8.00103 2.31598 8.92147 3 10 3C11.1504 3 12.1213 2.2219 12.4111 1.16113L12.4463 1.04883C12.645 0.491476 13.1744 0 13.8975 0H15.25C16.7688 0 18 1.23122 18 2.75V17.25C18 18.7688 16.7688 20 15.25 20H13.8975C13.1263 20 12.5755 19.4406 12.4111 18.8389C12.1213 17.7781 11.1504 17 10 17C8.84958 17 7.87865 17.7781 7.58887 18.8389C7.42453 19.4406 6.8737 20 6.10254 20H4.75C3.23122 20 2 18.7688 2 17.25V2.75C2 1.23122 3.23122 0 4.75 0H6.10254Z"
        fill={color}
      />
    </svg>
  );
};

CouponBoldFilled20.category = 'Money & Shopping';

export default CouponBoldFilled20;
