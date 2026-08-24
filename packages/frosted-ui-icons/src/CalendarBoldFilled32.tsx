import * as React from 'react';
import { IconProps } from './types';

export const CalendarBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarBoldFilled32"
      {...props}
    >
      <path
        d="M21.25 1.25c.552 0 1 .448 1 1v2.5h2.93c2.524 0 4.57 2.046 4.57 4.57v15.86c0 2.524-2.046 4.57-4.57 4.57H6.82c-2.524 0-4.57-2.046-4.57-4.57V9.32c0-2.524 2.046-4.57 4.57-4.57h2.93v-2.5c0-.552.448-1 1-1s1 .448 1 1v2.5h8.5v-2.5c0-.552.448-1 1-1zm-17 23.93c0 1.42 1.15 2.57 2.57 2.57h18.36c1.42 0 2.57-1.15 2.57-2.57V13.25H4.25v11.93z"
        fill={color}
      />
    </svg>
  );
};

CalendarBoldFilled32.category = 'Interface General';

export default CalendarBoldFilled32;
