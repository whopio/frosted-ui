import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.64098 6.64124L9.99974 10M13.3585 13.3588L9.99974 10M9.99974 10L6.64098 13.3588M9.99974 10L13.3585 6.64124"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBoldFilled20.category = 'Product Icons';

export default XMarkSmallBoldFilled20;
