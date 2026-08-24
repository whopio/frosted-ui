import * as React from 'react';
import { IconProps } from './types';

export const VolumeOffFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeOffFilled20"
      {...props}
    >
      <path
        d="M8.291 1.535C9.751.291 12 1.33 12 3.248v13.504c0 1.919-2.248 2.957-3.709 1.713l-3.646-3.107c-.272-.23-.617-.358-.973-.358H2.75C1.231 15 0 13.769 0 12.25v-4.5C0 6.231 1.231 5 2.75 5h.922c.356 0 .701-.127.973-.358L8.29 1.535zM18.72 7.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L18.31 10l1.47 1.47c.293.292.293.767 0 1.06-.293.293-.767.293-1.06 0l-1.47-1.47-1.47 1.47c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06L16.19 10l-1.47-1.47c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l1.47 1.47 1.47-1.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeOffFilled20.category = 'Sound & Music';

export default VolumeOffFilled20;
