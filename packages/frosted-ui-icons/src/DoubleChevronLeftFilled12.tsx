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
        d="M6.2822 2.63184C6.77014 2.1437 6.7702 1.35236 6.2822 0.864261C5.7941 0.376166 5.00279 0.376288 4.51462 0.864261L0.441379 4.9375C-0.144385 5.52329 -0.14439 6.47282 0.441379 7.0586L4.51462 11.1318C5.00278 11.6199 5.79407 11.62 6.2822 11.1318C6.77014 10.6437 6.7702 9.85236 6.2822 9.36426L2.91599 5.99805L6.2822 2.63184ZM11.6318 2.63184C12.12 2.14369 12.12 1.35242 11.6318 0.864261C11.1436 0.3762 10.3524 0.376137 9.86423 0.864261L5.79099 4.9375C5.20526 5.52326 5.20531 6.47281 5.79099 7.0586L9.86423 11.1318C10.3524 11.62 11.1437 11.62 11.6318 11.1318C12.12 10.6437 12.12 9.85242 11.6318 9.36426L8.2656 5.99805L11.6318 2.63184Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftFilled12.category = 'Arrows';

export default DoubleChevronLeftFilled12;
