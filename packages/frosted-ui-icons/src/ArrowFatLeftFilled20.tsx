import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11 14.5003V17.0277C11 18.0726 9.7641 18.6255 8.98535 17.9291L1.51367 11.2425C0.773359 10.5796 0.773178 9.42004 1.51367 8.75718L8.98535 2.07164C9.76404 1.37495 10.9998 1.92718 11 2.97203V5.50035H17.1025C18.1504 5.50035 19 6.34996 19 7.39781V12.6029C19 13.6507 18.1504 14.5003 17.1025 14.5003H11Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftFilled20.category = 'Arrows';

export default ArrowFatLeftFilled20;
