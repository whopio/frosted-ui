import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.11612 1.11647C9.60427 0.628494 10.3956 0.628413 10.8837 1.11647C11.3715 1.60459 11.3716 2.39597 10.8837 2.88405L7.76748 6.00026L10.8837 9.1155C11.3717 9.60349 11.3714 10.3949 10.8837 10.8831C10.3955 11.3712 9.60427 11.3712 9.11612 10.8831L5.9999 7.76784L2.88369 10.8841C2.39562 11.3721 1.60429 11.3719 1.11612 10.8841C0.628 10.3959 0.627974 9.60462 1.11612 9.11647L4.23233 6.00026L1.11612 2.88405C0.627961 2.3959 0.627962 1.60365 1.11612 1.1155C1.60422 0.627916 2.39568 0.627768 2.88369 1.1155L5.9999 4.23269L9.11612 1.11647Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkFilled12.category = 'Interface General';

export default XMarkFilled12;
