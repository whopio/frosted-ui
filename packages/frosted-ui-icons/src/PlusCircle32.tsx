import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM16 2.5C8.54416 2.5 2.5 8.54416 2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C23.4558 29.5 29.5 23.4558 29.5 16C29.5 8.54416 23.4558 2.5 16 2.5ZM16 9C16.4142 9 16.75 9.33579 16.75 9.75V15.25H22.25C22.6642 15.25 23 15.5858 23 16C23 16.4142 22.6642 16.75 22.25 16.75H16.75V22.25C16.75 22.6642 16.4142 23 16 23C15.5858 23 15.25 22.6642 15.25 22.25V16.75H9.75C9.33579 16.75 9.00001 16.4142 9 16C9 15.5858 9.33579 15.25 9.75 15.25H15.25V9.75C15.25 9.3358 15.5858 9.00002 16 9Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircle32.category = 'Product Icons';

export default PlusCircle32;
