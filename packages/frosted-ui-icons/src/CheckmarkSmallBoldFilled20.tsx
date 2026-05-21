import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.6893 5.43964C15.275 4.85393 16.2246 4.85395 16.8104 5.43964C17.3958 6.02544 17.396 6.97505 16.8104 7.56074L8.81037 15.5607C8.22468 16.1463 7.27505 16.1462 6.68928 15.5607L3.18928 12.0607C2.60353 11.475 2.60361 10.5254 3.18928 9.93964C3.77507 9.35386 4.72459 9.35386 5.31037 9.93964L7.74983 12.3791L14.6893 5.43964Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled20.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled20;
