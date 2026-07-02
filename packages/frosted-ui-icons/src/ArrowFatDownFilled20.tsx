import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.5003 9H17.0277C18.0726 9 18.6255 10.2359 17.9291 11.0146L11.2425 18.4863C10.5796 19.2266 9.42004 19.2268 8.75718 18.4863L2.07164 11.0146C1.37495 10.236 1.92718 9.00016 2.97203 9H5.50035V2.89746C5.50035 1.84961 6.34996 1 7.39781 1H12.6029C13.6507 1.00004 14.5003 1.84964 14.5003 2.89746V9Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownFilled20.category = 'Arrows';

export default ArrowFatDownFilled20;
