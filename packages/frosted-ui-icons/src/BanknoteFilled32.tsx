import * as React from 'react';
import { IconProps } from './types';

export const BanknoteFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanknoteFilled32"
      {...props}
    >
      <path
        d="M25.75 4C28.65 4 31 6.35 31 9.25v13.5c0 2.9-2.35 5.25-5.25 5.25H6.25C3.35 28 1 25.65 1 22.75V9.25C1 6.35 3.35 4 6.25 4h19.5zm-3 18.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5zM16 11.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75-2.127-4.75-4.75-4.75zM5.75 8c-.414 0-.75.336-.75.75s.336.75.75.75h3.5c.414 0 .75-.336.75-.75S9.664 8 9.25 8h-3.5z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled32.category = 'Money & Shopping';

export default BanknoteFilled32;
