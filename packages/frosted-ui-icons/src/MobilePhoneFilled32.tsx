import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneFilled32"
      {...props}
    >
      <path
        d="M20.25 1C23.426 1 26 3.574 26 6.75v18.5c0 3.176-2.574 5.75-5.75 5.75h-8.5C8.574 31 6 28.426 6 25.25V6.75C6 3.574 8.574 1 11.75 1h8.5zm-7.5 25.5c-.414 0-.75.336-.75.75s.336.75.75.75h6.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled32.category = 'Objects';

export default MobilePhoneFilled32;
