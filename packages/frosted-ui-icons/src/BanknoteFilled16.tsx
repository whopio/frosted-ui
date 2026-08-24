import * as React from 'react';
import { IconProps } from './types';

export const BanknoteFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanknoteFilled16"
      {...props}
    >
      <path
        d="M12.75 1.5C14.545 1.5 16 2.956 16 4.75v6.5c0 1.795-1.455 3.25-3.25 3.25h-9.5C1.455 14.5 0 13.046 0 11.25v-6.5C0 2.956 1.455 1.5 3.25 1.5h9.5zm-1.25 8.75c-.414 0-.75.336-.75.75 0 .415.336.75.75.75h1c.414 0 .75-.335.75-.75 0-.414-.336-.75-.75-.75h-1zM8 5.5C6.62 5.5 5.5 6.62 5.5 8c0 1.381 1.12 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.38-1.12-2.5-2.5-2.5zM3.5 4.25c-.414 0-.75.336-.75.75s.336.75.75.75h1c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled16.category = 'Money & Shopping';

export default BanknoteFilled16;
