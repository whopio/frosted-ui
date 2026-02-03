import * as React from 'react';
import { IconProps } from './types';

export const StopFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.75 1.00024C26.8585 1.00038 31 5.14169 31 10.2502V21.7502C30.9999 26.8587 26.8584 31.0001 21.75 31.0002H10.25C5.14145 31.0002 1.00013 26.8588 1 21.7502V10.2502C1 5.14161 5.14137 1.00024 10.25 1.00024H21.75Z"
        fill={color}
      />
    </svg>
  );
};

StopFilled32.category = 'Interface General';

export default StopFilled32;
