import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.75 4.75V8C0.75 9.24264 1.75736 10.25 3 10.25H9C10.2426 10.25 11.25 9.24264 11.25 8V4.75M0.75 4.75V4C0.75 2.75736 1.75736 1.75 3 1.75H9C10.2426 1.75 11.25 2.75736 11.25 4V4.75M0.75 4.75H11.25"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

CreditCardBlank12.category = 'Money & Shopping';

export default CreditCardBlank12;
