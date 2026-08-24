import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBoxFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftToLineInBoxFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.32 0 12 1.679 12 3.75v4.5c0 2.07-1.679 3.749-3.75 3.749h-4.5c-2.07 0-3.749-1.679-3.749-3.75v-4.5C.001 1.68 1.68 0 3.751 0h4.5zm-4.5 3c-.414 0-.75.336-.75.75v4.5c0 .413.336.75.75.75s.75-.337.75-.75v-4.5c0-.414-.336-.75-.75-.75zm4.997.19c-.31-.276-.783-.248-1.058.062l-2 2.25c-.252.284-.252.711 0 .996l2 2.25c.275.309.749.337 1.058.062.31-.275.338-.75.063-1.059L7.252 6 8.81 4.248c.275-.31.247-.784-.063-1.059z"
        fill={color}
      />
    </svg>
  );
};

ChevronLeftToLineInBoxFilled12.category = 'Interface General';

export default ChevronLeftToLineInBoxFilled12;
