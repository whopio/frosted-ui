import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 2.5C8.54416 2.5 2.5 8.54416 2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C23.4558 29.5 29.5 23.4558 29.5 16C29.5 8.54416 23.4558 2.5 16 2.5ZM16 8.75C16.5523 8.75 17 9.19771 17 9.75V15H22.25C22.8023 15 23.25 15.4477 23.25 16C23.25 16.5523 22.8023 17 22.25 17H17V22.25C17 22.8023 16.5523 23.25 16 23.25C15.4477 23.25 15 22.8023 15 22.25V17H9.75C9.19772 17 8.75001 16.5523 8.75 16C8.75 15.4477 9.19771 15 9.75 15H15V9.75C15 9.19773 15.4477 8.75002 16 8.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold32.category = 'Interface General';

export default PlusCircleBold32;
