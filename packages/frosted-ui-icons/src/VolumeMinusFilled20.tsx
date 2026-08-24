import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeMinusFilled20"
      {...props}
    >
      <path
        d="M8.291 1.535C9.751.291 12 1.33 12 3.248v13.504c0 1.919-2.248 2.957-3.709 1.713l-3.646-3.107c-.272-.23-.617-.358-.973-.358H2.75C1.231 15 0 13.769 0 12.25v-4.5C0 6.231 1.231 5 2.75 5h.922c.356 0 .701-.127.973-.358L8.29 1.535zM19.25 9.25c.414 0 .75.336.75.75s-.336.75-.75.75h-4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeMinusFilled20.category = 'Sound & Music';

export default VolumeMinusFilled20;
