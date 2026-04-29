import * as React from 'react';
import { IconProps } from './types';

export const Ban24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM5.48047 19.5791C7.23134 21.0866 9.50833 22 12 22C17.5228 22 22 17.5228 22 12C22 9.50833 21.0866 7.23134 19.5791 5.48047L5.48047 19.5791ZM12 2C6.47715 2 2 6.47715 2 12C2 14.4912 2.91299 16.7678 4.41992 18.5186L18.5186 4.41992C16.7678 2.91299 14.4912 2 12 2Z"
        fill={color}
      />
    </svg>
  );
};

Ban24.category = 'Interface General';

export default Ban24;
