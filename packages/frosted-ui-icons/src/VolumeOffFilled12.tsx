import * as React from 'react';
import { IconProps } from './types';

export const VolumeOffFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeOffFilled12"
      {...props}
    >
      <path
        d="M4.168 1.435C5.05.638 6.5 1.255 6.5 2.48v7.04c0 1.265-1.545 1.88-2.416.963L2.678 9H1.5C.672 9 0 8.328 0 7.5v-3C0 3.672.672 3 1.5 3h1.177l1.407-1.483.084-.082zm6.55 2.786c.293-.293.768-.294 1.061-.002.294.292.294.767.002 1.06L11.062 6l.72.72c.292.294.29.77-.003 1.061-.293.293-.768.292-1.06-.002l-.717-.718-.723.72c-.293.293-.768.292-1.06-.002-.292-.293-.291-.768.002-1.06L8.94 6l-.72-.719c-.294-.292-.294-.767-.002-1.06.292-.293.767-.294 1.06-.002l.723.72.717-.718z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeOffFilled12.category = 'Sound & Music';

export default VolumeOffFilled12;
