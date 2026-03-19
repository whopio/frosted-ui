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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM16 8.25C15.1716 8.25002 14.5 8.92159 14.5 9.75V14.5H9.75C8.92157 14.5 8.25 15.1716 8.25 16C8.25001 16.8284 8.92158 17.5 9.75 17.5H14.5V22.25C14.5 23.0784 15.1716 23.75 16 23.75C16.8284 23.75 17.5 23.0784 17.5 22.25V17.5H22.25C23.0784 17.5 23.75 16.8284 23.75 16C23.75 15.1716 23.0784 14.5 22.25 14.5H17.5V9.75C17.5 8.92157 16.8284 8.25 16 8.25Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBoldFilled32.category = 'Product Icons';

export default PlusCircleBoldFilled32;
