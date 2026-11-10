import * as React from 'react';
import { IconProps } from './types';

export const BanknoteFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanknoteFilled24"
      {...props}
    >
      <path
        d="M19.75 2.5C22.097 2.5 24 4.404 24 6.751v10.5c0 2.346-1.904 4.25-4.25 4.25H4.25c-2.347 0-4.25-1.903-4.251-4.25v-10.5C-.001 4.404 1.903 2.5 4.25 2.5h15.5zm-2.501 14c-.414 0-.75.336-.75.75s.336.75.75.75h2.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.5zm-5.25-8.25c-2.071 0-3.75 1.679-3.75 3.75 0 2.071 1.679 3.75 3.75 3.75 2.071 0 3.75-1.679 3.75-3.75 0-2.071-1.679-3.75-3.75-3.75zM4.249 6c-.414 0-.75.336-.75.75s.336.75.75.75h2.5c.414 0 .75-.336.75-.75S7.163 6 6.749 6h-2.5z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled24.category = 'Money & Shopping';

export default BanknoteFilled24;
