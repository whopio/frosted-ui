import * as React from 'react';
import { IconProps } from './types';

export const BanknoteFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.25 2C18.3211 2 20 3.67893 20 5.75V14.25C20 16.3211 18.3211 18 16.25 18H3.75C1.67893 18 0 16.3211 0 14.25V5.75C8.88642e-09 3.67893 1.67893 2 3.75 2H16.25ZM14.75 13.5C14.3358 13.5 14 13.8358 14 14.25C14 14.6642 14.3358 15 14.75 15H16.25C16.6642 15 17 14.6642 17 14.25C17 13.8358 16.6642 13.5 16.25 13.5H14.75ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7ZM3.75 5C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H5.25C5.66421 6.5 6 6.16421 6 5.75C6 5.33579 5.66421 5 5.25 5H3.75Z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled20.category = 'Money & Shopping';

export default BanknoteFilled20;
