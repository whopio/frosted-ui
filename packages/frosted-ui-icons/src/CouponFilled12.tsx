import * as React from 'react';
import { IconProps } from './types';

export const CouponFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.99805 0C4.44671 0.000157684 4.78777 0.2555 4.97852 0.552734L5.05078 0.681641L5.12598 0.813477C5.31932 1.10492 5.64206 1.28906 6 1.28906C6.40915 1.28906 6.77275 1.0481 6.94922 0.681641L7.02148 0.552734C7.21223 0.2555 7.55329 0.000157594 8.00195 0H9.25C10.2165 1.78814e-07 11 0.783502 11 1.75V10.25C11 11.2165 10.2165 12 9.25 12H8.00195C7.48938 11.9998 7.11714 11.6667 6.94922 11.3184C6.77275 10.9519 6.40914 10.7109 6 10.7109C5.59086 10.7109 5.22725 10.9519 5.05078 11.3184C4.88286 11.6667 4.51062 11.9998 3.99805 12H2.75C1.7835 12 1 11.2165 1 10.25V1.75C1 0.783502 1.7835 0 2.75 0H3.99805Z"
        fill={color}
      />
    </svg>
  );
};

CouponFilled12.category = 'Money & Shopping';

export default CouponFilled12;
