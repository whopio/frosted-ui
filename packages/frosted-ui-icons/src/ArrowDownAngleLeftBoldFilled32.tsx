import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M29.4995 4.25C30.3279 4.25 30.9995 4.92158 30.9995 5.75V17.5C30.9995 19.7091 29.2086 21.5 26.9995 21.5H6.22412L10.0396 25.1689C10.6364 25.7432 10.6547 26.693 10.0806 27.29C9.50632 27.8867 8.55646 27.9051 7.95947 27.3311L1.45947 21.0811C1.16569 20.7983 0.999512 20.4078 0.999512 20C0.999512 19.5922 1.16569 19.2017 1.45947 18.9189L7.95947 12.6689C8.55646 12.0949 9.50632 12.1133 10.0806 12.71C10.6547 13.307 10.6364 14.2568 10.0396 14.8311L6.22412 18.5H26.9995C27.5518 18.5 27.9995 18.0523 27.9995 17.5V5.75C27.9995 4.92173 28.6713 4.25025 29.4995 4.25Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled32.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled32;
