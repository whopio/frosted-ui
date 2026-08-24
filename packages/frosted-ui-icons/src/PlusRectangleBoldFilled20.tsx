import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusRectangleBoldFilled20"
      {...props}
    >
      <path
        d="M13.4 1C16.493 1 19 3.507 19 6.6v6.8c0 3.093-2.507 5.6-5.6 5.6H6.6C3.507 19 1 16.493 1 13.4V6.6C1 3.507 3.507 1 6.6 1h6.8zM10 4.875c-.621 0-1.125.504-1.125 1.125v2.875H6c-.621 0-1.125.504-1.125 1.125S5.379 11.125 6 11.125h2.875V14c0 .621.504 1.125 1.125 1.125s1.125-.504 1.125-1.125v-2.875H14c.621 0 1.125-.504 1.125-1.125S14.621 8.875 14 8.875h-2.875V6c0-.621-.504-1.125-1.125-1.125z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBoldFilled20.category = 'Interface General';

export default PlusRectangleBoldFilled20;
