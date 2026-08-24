import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneFilled20"
      {...props}
    >
      <path
        d="M12.5 1c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4h-5c-2.21 0-4-1.79-4-4V5c0-2.21 1.79-4 4-4h5zM8.25 14.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled20.category = 'Objects';

export default MobilePhoneFilled20;
