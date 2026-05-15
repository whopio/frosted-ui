import * as React from 'react';
import { IconProps } from './types';

export const CreditCard24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.749 3C22.0962 3 23.999 4.90279 23.999 7.25V16.75C23.999 19.0972 22.0962 21 19.749 21H4.25C1.90279 21 0 19.0972 0 16.75V7.25C0 4.90279 1.90279 3 4.25 3H19.749ZM1.5 16.75C1.5 18.2688 2.73122 19.5 4.25 19.5H19.749C21.2678 19.5 22.499 18.2688 22.499 16.75V9.25H1.5V16.75ZM11.1768 14.75C11.591 14.75 11.9268 15.0858 11.9268 15.5C11.9268 15.9142 11.591 16.25 11.1768 16.25H5.14062C4.72641 16.25 4.39062 15.9142 4.39062 15.5C4.39062 15.0858 4.72641 14.75 5.14062 14.75H11.1768ZM4.25 4.5C2.73122 4.5 1.5 5.73122 1.5 7.25H22.499C22.499 5.73122 21.2678 4.5 19.749 4.5H4.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard24.category = 'Money & Shopping';

export default CreditCard24;
