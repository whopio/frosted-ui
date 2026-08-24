import * as React from 'react';
import { IconProps } from './types';

export const CalendarBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarBoldFilled16"
      {...props}
    >
      <path
        d="M11.38 0c.552 0 1 .448 1 1v1.106c1.76.235 3.12 1.737 3.12 3.561v6.74c0 1.987-1.614 3.593-3.6 3.593H4.1C2.114 16 .5 14.394.5 12.407v-6.74c0-1.824 1.36-3.326 3.12-3.56V1c0-.552.448-1 1-1s1 .448 1 1v1.074h4.76V1c0-.552.448-1 1-1zM2.5 12.407c0 .877.713 1.593 1.6 1.593h7.8c.887 0 1.6-.716 1.6-1.593V8.223h-11v4.184z"
        fill={color}
      />
    </svg>
  );
};

CalendarBoldFilled16.category = 'Interface General';

export default CalendarBoldFilled16;
