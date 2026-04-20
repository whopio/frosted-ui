import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.9951 4.5C29.7565 4.5 31.9951 6.73858 31.9951 9.5V22.5C31.9951 25.2614 29.7565 27.5 26.9951 27.5H5C2.23874 27.4998 0 25.2613 0 22.5V9.5C0 6.7387 2.23874 4.5002 5 4.5H26.9951ZM1.5 12.5V22.5C1.5 24.4329 3.06717 25.9998 5 26H26.9951C28.9281 26 30.4951 24.433 30.4951 22.5V12.5H1.5ZM5 6C3.06717 6.0002 1.5 7.56713 1.5 9.5V11H30.4951V9.5C30.4951 7.567 28.9281 6 26.9951 6H5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank32.category = 'Money & Shopping';

export default CreditCardBlank32;
