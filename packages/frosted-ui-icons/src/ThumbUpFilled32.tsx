import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbUpFilled32"
      {...props}
    >
      <path
        d="M8.715 13.583H5c-1.15 0-2.083.933-2.083 2.083v10c0 1.151.933 2.084 2.083 2.084h18.23c2.347 0 4.342-1.715 4.695-4.036l1.116-7.333c.438-2.875-1.787-5.465-4.695-5.465H18.23l.633-4.056c.323-2.075-1.288-3.944-3.382-3.944-.78 0-1.496.435-1.854 1.13l-4.913 9.537zM8.25 26.25V15.083H5c-.322 0-.583.261-.583.583v10c0 .323.261.584.583.584h3.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbUpFilled32.category = 'Interface General';

export default ThumbUpFilled32;
