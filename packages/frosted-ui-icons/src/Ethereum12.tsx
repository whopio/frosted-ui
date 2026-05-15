import * as React from 'react';
import { IconProps } from './types';

export const Ethereum12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99999 0C6.25075 4.76648e-06 6.48491 0.125339 6.62401 0.333984L10.124 5.58398C10.292 5.83591 10.292 6.16409 10.124 6.41602L6.62401 11.666C6.48491 11.8747 6.25075 12 5.99999 12C5.74922 12 5.51506 11.8747 5.37596 11.666L1.87596 6.41602C1.70801 6.16409 1.70801 5.83591 1.87596 5.58398L5.37596 0.333984L5.4326 0.259766C5.57404 0.0960442 5.7806 0 5.99999 0ZM6.25194 7.95605C6.08893 8.01422 5.91104 8.01422 5.74803 7.95605L4.37889 7.4668L5.99999 9.89746L7.6201 7.4668L6.25194 7.95605ZM3.65624 5.61621L5.99999 6.45312L8.34276 5.61621L5.99999 2.10156L3.65624 5.61621Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Ethereum12.category = 'Interface General';

export default Ethereum12;
