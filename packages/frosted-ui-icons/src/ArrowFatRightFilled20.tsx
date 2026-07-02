import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 14.5003L9 17.0277C9 18.0726 10.2359 18.6255 11.0146 17.9291L18.4863 11.2425C19.2266 10.5796 19.2268 9.42004 18.4863 8.75718L11.0146 2.07164C10.236 1.37495 9.00016 1.92718 9 2.97203V5.50035H2.89746C1.84961 5.50035 1 6.34996 1 7.39781L1 12.6029C1.00004 13.6507 1.84964 14.5003 2.89746 14.5003H9Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightFilled20.category = 'Arrows';

export default ArrowFatRightFilled20;
