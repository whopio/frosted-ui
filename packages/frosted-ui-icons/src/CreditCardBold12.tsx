import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.75 1C10.5449 1 12 2.45507 12 4.25V7.75C12 9.54493 10.5449 11 8.75 11H3.25C1.45507 11 0 9.54493 0 7.75V4.25C0 2.45507 1.45507 1 3.25 1H8.75ZM2 7.75C2 8.44036 2.55964 9 3.25 9H8.75C9.44036 9 10 8.44036 10 7.75V6H2V7.75ZM5.25 6.5C5.80228 6.5 6.25 6.94772 6.25 7.5C6.25 8.05228 5.80228 8.5 5.25 8.5H3.75C3.19772 8.5 2.75 8.05228 2.75 7.5C2.75 6.94772 3.19772 6.5 3.75 6.5H5.25ZM3.25 3C2.64529 3 2.14124 3.42948 2.02539 4H9.97461C9.85876 3.42948 9.35471 3 8.75 3H3.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBold12.category = 'Money & Shopping';

export default CreditCardBold12;
