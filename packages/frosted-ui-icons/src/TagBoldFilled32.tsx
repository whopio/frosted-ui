import * as React from 'react';
import { IconProps } from './types';

export const TagBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBoldFilled32"
      {...props}
    >
      <path
        d="M26.001 0.998779C28.7623 0.998779 31.0009 3.23745 31.001 5.99878V14.3386C31.0009 16.1949 30.2637 17.9752 28.9512 19.2878L19.2021 29.0369C16.859 31.3799 13.0599 31.3799 10.7168 29.0369L2.96289 21.283C0.620416 18.9398 0.620033 15.1405 2.96289 12.7976L12.7129 3.04858C14.0255 1.73623 15.806 0.998888 17.6621 0.998779H26.001ZM22 5.99976C19.7909 5.99976 18.0001 7.79073 18 9.99976C18 12.2089 19.7909 13.9998 22 13.9998C24.2091 13.9998 26 12.2089 26 9.99976C25.9999 7.79073 24.2091 5.99976 22 5.99976Z"
        fill={color}
      />
    </svg>
  );
};

TagBoldFilled32.category = 'Interface General';

export default TagBoldFilled32;
