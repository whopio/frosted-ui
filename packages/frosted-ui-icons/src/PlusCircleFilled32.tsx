import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM16 9C15.5858 9.00002 15.25 9.3358 15.25 9.75V15.25H9.75C9.33579 15.25 9 15.5858 9 16C9.00001 16.4142 9.33579 16.75 9.75 16.75H15.25V22.25C15.25 22.6642 15.5858 23 16 23C16.4142 23 16.75 22.6642 16.75 22.25V16.75H22.25C22.6642 16.75 23 16.4142 23 16C23 15.5858 22.6642 15.25 22.25 15.25H16.75V9.75C16.75 9.33579 16.4142 9 16 9Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleFilled32.category = 'Product Icons';

export default PlusCircleFilled32;
