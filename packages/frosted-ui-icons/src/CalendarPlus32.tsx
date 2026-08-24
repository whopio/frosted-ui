import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarPlus32"
      {...props}
    >
      <path
        d="M23.667 18.917c.414 0 .75.336.75.75v3.583H28c.414 0 .75.336.75.75s-.336.75-.75.75h-3.583v3.584c0 .414-.336.75-.75.75s-.75-.336-.75-.75V24.75h-3.584c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.584v-3.583c0-.414.336-.75.75-.75zm-2-16c.414 0 .75.336.75.75v1.917h1.916c1.887 0 3.417 1.53 3.417 3.416v6c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.916H5.75v11.25c0 1.058.859 1.916 1.917 1.916H15c.414 0 .75.336.75.75s-.336.75-.75.75H7.667c-1.887 0-3.417-1.53-3.417-3.416V9c0-1.887 1.53-3.416 3.417-3.416h1.916V3.667c0-.414.336-.75.75-.75s.75.336.75.75v1.917h9.834V3.667c0-.414.336-.75.75-.75zm-14 4.167C6.609 7.084 5.75 7.942 5.75 9v2.584h20.5V9c0-1.058-.858-1.916-1.917-1.916H7.667z"
        fill={color}
      />
    </svg>
  );
};

CalendarPlus32.category = 'Interface General';

export default CalendarPlus32;
