import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.541 15.7694C10.3978 15.9186 10.1994 16.002 9.99266 16C9.7859 15.9979 9.58915 15.9106 9.4489 15.7587L6.4489 12.5087C6.16794 12.2043 6.18692 11.7298 6.49129 11.4489C6.79566 11.1679 7.27015 11.1869 7.5511 11.4913L10.0107 14.1559L15.459 8.4806C15.7458 8.18179 16.2206 8.1721 16.5194 8.45896C16.8182 8.74582 16.8279 9.22059 16.541 9.5194L10.541 15.7694Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckmarkCircleFilled24;
