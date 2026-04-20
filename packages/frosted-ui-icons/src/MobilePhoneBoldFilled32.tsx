import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 1C23.3137 1 26 3.68629 26 7V25C26 28.3137 23.3137 31 20 31H12C8.68629 31 6 28.3137 6 25V7C6 3.68629 8.68629 1 12 1H20ZM12.75 26C12.1977 26 11.75 26.4477 11.75 27C11.75 27.5523 12.1977 28 12.75 28H19.25C19.8023 28 20.25 27.5523 20.25 27C20.25 26.4477 19.8023 26 19.25 26H12.75Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBoldFilled32.category = 'Objects';

export default MobilePhoneBoldFilled32;
