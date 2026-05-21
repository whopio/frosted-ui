import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.118 12.4047C16.6071 12.8914 17.3985 12.8897 17.8856 12.4008C18.3724 11.9118 18.3704 11.1204 17.8816 10.6332L13.2352 6.00531C12.5523 5.3252 11.4473 5.32521 10.7645 6.00531L6.11797 10.6332C5.629 11.1204 5.6271 11.9117 6.11407 12.4008C6.60117 12.8896 7.39259 12.8915 7.88164 12.4047L11.9998 8.30316L16.118 12.4047ZM16.118 18.1313C16.6071 18.6183 17.3984 18.6165 17.8856 18.1274C18.3723 17.6382 18.3706 16.8468 17.8816 16.3598L13.2352 11.7319C12.5524 11.0519 11.4473 11.052 10.7645 11.7319L6.11797 16.3598C5.6289 16.8469 5.62709 17.6382 6.11407 18.1274C6.60118 18.6165 7.39249 18.6183 7.88164 18.1313L11.9998 14.0297L16.118 18.1313Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled24.category = 'Arrows';

export default DoubleChevronUpSmallFilled24;
