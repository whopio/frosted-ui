import * as React from 'react';
import { IconProps } from './types';

export const CreditCard12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M0.75 5.25H11.25M3.75 7.75H4.25M2.2 10.25H9.8C10.6008 10.25 11.25 9.60081 11.25 8.8V3.7C11.25 2.89919 10.6008 2.25 9.8 2.25H2.2C1.39919 2.25 0.75 2.89919 0.75 3.7V8.8C0.75 9.60081 1.39919 10.25 2.2 10.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CreditCard12;
