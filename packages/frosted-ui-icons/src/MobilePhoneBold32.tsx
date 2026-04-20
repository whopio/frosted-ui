import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 1C23.3137 1 26 3.68629 26 7V25C26 28.3137 23.3137 31 20 31H12C8.68629 31 6 28.3137 6 25V7C6 3.68629 8.68629 1 12 1H20ZM12 3C9.79086 3 8 4.79086 8 7V25C8 27.2091 9.79086 29 12 29H20C22.2091 29 24 27.2091 24 25V7C24 4.79086 22.2091 3 20 3H12ZM19.25 25C19.8023 25 20.25 25.4477 20.25 26C20.25 26.5523 19.8023 27 19.25 27H12.75C12.1977 27 11.75 26.5523 11.75 26C11.75 25.4477 12.1977 25 12.75 25H19.25Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBold32.category = 'Objects';

export default MobilePhoneBold32;
