import * as React from 'react';
import { IconProps } from './types';

export const VolumePlusFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumePlusFilled12"
      {...props}
    >
      <path
        d="M4.168 1.435C5.05.638 6.5 1.255 6.5 2.48v7.04c0 1.265-1.545 1.88-2.416.963L2.678 9H1.5C.672 9 0 8.328 0 7.5v-3C0 3.672.672 3 1.5 3h1.177l1.407-1.483.084-.082zM9.75 3.75c.414 0 .75.336.75.75v.75h.75c.414 0 .75.336.75.75s-.336.75-.75.75h-.75v.75c0 .414-.336.75-.75.75S9 7.914 9 7.5v-.75h-.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H9V4.5c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumePlusFilled12.category = 'Sound & Music';

export default VolumePlusFilled12;
