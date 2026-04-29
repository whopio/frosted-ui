import * as React from 'react';
import { IconProps } from './types';

export const BanBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.8887 2.52441C11.5873 3.5053 12 4.70401 12 6C12 9.31371 9.31371 12 6 12C4.70401 12 3.5053 11.5873 2.52441 10.8887L10.8887 2.52441ZM6 0C7.2955 0 8.49393 0.412219 9.47461 1.11035L1.11035 9.47461C0.412219 8.49393 0 7.2955 0 6C0 2.68629 2.68629 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

BanBoldFilled12.category = 'Interface General';

export default BanBoldFilled12;
