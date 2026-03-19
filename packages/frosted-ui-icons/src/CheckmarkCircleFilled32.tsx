import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1.00024C24.2842 1.00038 31 7.71605 31 16.0002C30.9999 24.2843 24.2841 31.0001 16 31.0002C7.71581 31.0002 1.00013 24.2844 1 16.0002C1 7.71597 7.71573 1.00024 16 1.00024ZM22.7803 11.47C22.4874 11.1771 22.0126 11.1771 21.7197 11.47L13.6201 19.5696L10.2803 16.2297C9.9874 15.9369 9.51261 15.9369 9.21973 16.2297C8.92691 16.5226 8.92691 16.9974 9.21973 17.2903L13.0898 21.1604C13.2305 21.3009 13.4213 21.3801 13.6201 21.3801C13.8189 21.3801 14.0098 21.301 14.1504 21.1604L22.7803 12.5305C23.0731 12.2377 23.073 11.7629 22.7803 11.47Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled32.category = 'Checkmarks';

export default CheckmarkCircleFilled32;
