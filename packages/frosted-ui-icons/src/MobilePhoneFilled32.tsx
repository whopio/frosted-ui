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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.25 1C23.4256 1 26 3.57436 26 6.75V25.25C26 28.4256 23.4256 31 20.25 31H11.75C8.57436 31 6 28.4256 6 25.25V6.75C6 3.57436 8.57436 1 11.75 1H20.25ZM12.75 26.5C12.3358 26.5 12 26.8358 12 27.25C12 27.6642 12.3358 28 12.75 28H19.25C19.6642 28 20 27.6642 20 27.25C20 26.8358 19.6642 26.5 19.25 26.5H12.75Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled32.category = 'Objects';

export default MobilePhoneFilled32;
