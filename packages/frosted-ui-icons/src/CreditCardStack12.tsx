import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStack12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStack12"
      {...props}
    >
      <path
        d="M7.75 1c1.162 0 2.117.881 2.236 2.012C11.118 3.13 12 4.088 12 5.25v3.5C12 9.993 10.992 11 9.75 11h-5.5c-1.163 0-2.119-.882-2.237-2.013C.882 8.868 0 7.913 0 6.75v-3.5C0 2.008 1.007 1 2.25 1h5.5zM3.5 8.75c0 .414.336.75.75.75h5.5c.414 0 .75-.336.75-.75V7h-7v1.75zM6.643 7.5c.414 0 .75.336.75.75s-.336.75-.75.75H4.929c-.414 0-.75-.336-.75-.75s.335-.75.75-.75h1.714zm-4.393-5c-.414 0-.75.336-.75.75v3.5c0 .326.21.6.5.704V5.25C2 4.008 3.007 3 4.25 3h4.204c-.103-.29-.378-.5-.704-.5h-5.5zm2 2c-.414 0-.75.336-.75.75v.25h7v-.25c0-.414-.336-.75-.75-.75h-5.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStack12.category = 'Money & Shopping';

export default CreditCardStack12;
