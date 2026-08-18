import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircleBoldFilled32"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 8.75C15.4477 8.75002 15 9.19773 15 9.75V15H9.75C9.19771 15 8.75 15.4477 8.75 16C8.75001 16.5523 9.19772 17 9.75 17H15V22.25C15 22.8023 15.4477 23.25 16 23.25C16.5523 23.25 17 22.8023 17 22.25V17H22.25C22.8023 17 23.25 16.5523 23.25 16C23.25 15.4477 22.8023 15 22.25 15H17V9.75C17 9.19771 16.5523 8.75 16 8.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBoldFilled32.category = 'Interface General';

export default PlusCircleBoldFilled32;
