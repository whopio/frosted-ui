import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarPlus12"
      {...props}
    >
      <path
        d="M8.875 6.625c.414 0 .75.336.75.75v.875h.875c.414 0 .75.336.75.75s-.336.75-.75.75h-.875v.875c0 .414-.336.75-.75.75s-.75-.336-.75-.75V9.75H7.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h.875v-.875c0-.414.336-.75.75-.75zm-.75-6c.414 0 .75.336.75.75v.25h.25c.966 0 1.75.784 1.75 1.75v2.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.25h-6.75v3.75c0 .138.112.25.25.25h2.75c.414 0 .75.336.75.75s-.336.75-.75.75h-2.75c-.966 0-1.75-.784-1.75-1.75v-5.75c0-.966.784-1.75 1.75-1.75h.25v-.25c0-.414.336-.75.75-.75s.75.336.75.75v.25h2.75v-.25c0-.414.336-.75.75-.75zm-5.25 2.5c-.138 0-.25.112-.25.25v.5h6.75v-.5c0-.138-.112-.25-.25-.25h-6.25z"
        fill={color}
      />
    </svg>
  );
};

CalendarPlus12.category = 'Interface General';

export default CalendarPlus12;
