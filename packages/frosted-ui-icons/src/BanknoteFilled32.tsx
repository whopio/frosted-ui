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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M25.75 4C28.6493 4.00013 30.9999 6.3507 31 9.25V22.75C30.9999 25.6493 28.6493 27.9999 25.75 28H6.25C3.3507 27.9999 1.00013 25.6493 1 22.75V9.25C1.00013 6.3507 3.3507 4.00013 6.25 4H25.75ZM22.75 22.5C22.3358 22.5 22 22.8358 22 23.25C22 23.6642 22.3358 24 22.75 24H26.25C26.6642 24 27 23.6642 27 23.25C27 22.8358 26.6642 22.5 26.25 22.5H22.75ZM16 11.25C13.3766 11.25 11.25 13.3766 11.25 16C11.25 18.6234 13.3766 20.75 16 20.75C18.6234 20.75 20.75 18.6234 20.75 16C20.75 13.3766 18.6234 11.25 16 11.25ZM5.75 8C5.33579 8 5 8.33579 5 8.75C5 9.16421 5.33579 9.5 5.75 9.5H9.25C9.66421 9.5 10 9.16421 10 8.75C10 8.33579 9.66421 8 9.25 8H5.75Z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled32.category = 'Money & Finance';

export default BanknoteFilled32;
