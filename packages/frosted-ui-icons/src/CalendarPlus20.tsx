import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarPlus20"
      {...props}
    >
      <path
        d="M14.792 11.542c.414 0 .75.336.75.75v1.958H17.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.958v1.959c0 .414-.336.75-.75.75s-.75-.336-.75-.75V15.75h-1.959c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.959v-1.958c0-.414.336-.75.75-.75zm-1.25-10c.414 0 .75.336.75.75v.917h.916c1.335 0 2.417 1.081 2.417 2.416v3.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.916H3.875v6.75c0 .506.41.916.917.916h4.583c.414 0 .75.336.75.75s-.336.75-.75.75H4.792c-1.334 0-2.417-1.082-2.417-2.416V5.625c0-1.335 1.082-2.416 2.417-2.416h.916v-.917c0-.414.336-.75.75-.75s.75.336.75.75v.917h5.584v-.917c0-.414.336-.75.75-.75zm-8.75 3.167c-.506 0-.917.41-.917.916v1.334h12.25V5.625c0-.506-.41-.916-.917-.916H4.792z"
        fill={color}
      />
    </svg>
  );
};

CalendarPlus20.category = 'Interface General';

export default CalendarPlus20;
