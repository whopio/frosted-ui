import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhoneFilled12"
      {...props}
    >
      <path
        d="M7.25 0c1.795 0 3.25 1.455 3.25 3.25v5.5c0 1.795-1.455 3.25-3.25 3.25h-2.5C2.955 12 1.5 10.545 1.5 8.75v-5.5C1.5 1.455 2.955 0 4.75 0h2.5zM5 8c-.414 0-.75.336-.75.75s.336.75.75.75h2c.414 0 .75-.336.75-.75S7.414 8 7 8H5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneFilled12.category = 'Objects';

export default MobilePhoneFilled12;
