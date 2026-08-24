import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAdd24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAdd24"
      {...props}
    >
      <path
        d="M18.75 14c.414 0 .75.336.75.75v2.75h2.75c.414 0 .75.336.75.75s-.336.75-.75.75H19.5v2.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V19h-2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H18v-2.75c0-.414.336-.75.75-.75zm0-11C21.097 3 23 4.903 23 7.25v6.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V9h-19v6.75c0 1.519 1.231 2.75 2.75 2.75h6.5c.414 0 .75.336.75.75s-.336.75-.75.75h-6.5C2.903 20 1 18.097 1 15.75v-8.5C1 4.903 2.903 3 5.25 3h13.5zM5.25 4.5C3.731 4.5 2.5 5.731 2.5 7.25v.25h19v-.25c0-1.519-1.231-2.75-2.75-2.75H5.25z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd24.category = 'Money & Shopping';

export default CreditCardAdd24;
