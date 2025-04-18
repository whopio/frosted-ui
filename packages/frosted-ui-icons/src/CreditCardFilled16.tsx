import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0 4.54C0 3.1372 1.1372 2 2.54 2H13.46C14.8628 2 16 3.1372 16 4.54V5H0V4.54Z"
        fill={color}
      />
      <path
        d="M0 7V11.46C0 12.8628 1.1372 14 2.54 14H13.46C14.8628 14 16 12.8628 16 11.46V7H0ZM2.75 10C2.75 9.44772 3.19772 9 3.75 9H6.25C6.80228 9 7.25 9.44772 7.25 10C7.25 10.5523 6.80228 11 6.25 11H3.75C3.19772 11 2.75 10.5523 2.75 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CreditCardFilled16;
