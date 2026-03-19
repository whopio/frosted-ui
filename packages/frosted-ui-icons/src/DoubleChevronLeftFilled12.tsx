import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.2822 2.63181C6.77014 2.14367 6.7702 1.35233 6.2822 0.86423C5.7941 0.376136 5.00279 0.376258 4.51462 0.86423L0.441379 4.93747C-0.144385 5.52326 -0.14439 6.47278 0.441379 7.05857L4.51462 11.1318C5.00278 11.6199 5.79407 11.6199 6.2822 11.1318C6.77014 10.6437 6.7702 9.85233 6.2822 9.36423L2.91599 5.99802L6.2822 2.63181ZM11.6318 2.63181C12.12 2.14366 12.12 1.35239 11.6318 0.86423C11.1436 0.376169 10.3524 0.376106 9.86423 0.86423L5.79099 4.93747C5.20526 5.52323 5.20531 6.47278 5.79099 7.05857L9.86423 11.1318C10.3524 11.62 11.1437 11.62 11.6318 11.1318C12.12 10.6437 12.12 9.85239 11.6318 9.36423L8.2656 5.99802L11.6318 2.63181Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftFilled12.category = 'Arrows';

export default DoubleChevronLeftFilled12;
