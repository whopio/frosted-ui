import * as React from 'react';
import { IconProps } from './types';

export const CreditCard32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M1.75 12.25H30.25M6.75 20.75H13.25M5.25 26.25H26.75C28.683 26.25 30.25 24.683 30.25 22.75V9.25C30.25 7.317 28.683 5.75 26.75 5.75H5.25C3.317 5.75 1.75 7.317 1.75 9.25V22.75C1.75 24.683 3.317 26.25 5.25 26.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CreditCard32;
