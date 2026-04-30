import * as React from 'react';
import { IconProps } from './types';

export const CalendarBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.3799 0C11.9322 0 12.3799 0.447715 12.3799 1V2.10645C14.1392 2.34051 15.5 3.84299 15.5 5.66699V12.4072C15.5 14.3939 13.8857 15.9998 11.9004 16H4.09961C2.11425 15.9998 0.5 14.3939 0.5 12.4072V5.66699C0.5 3.84299 1.86079 2.34051 3.62012 2.10645V1C3.62012 0.447715 4.06783 0 4.62012 0C5.17235 6.33895e-05 5.62012 0.447754 5.62012 1V2.07422H10.3799V1C10.3799 0.447754 10.8277 6.2868e-05 11.3799 0ZM2.5 12.4072C2.5 13.284 3.21344 13.9998 4.09961 14H11.9004C12.7866 13.9998 13.5 13.284 13.5 12.4072V8.22266H2.5V12.4072ZM4.09961 4.07422C3.21344 4.07443 2.5 4.79024 2.5 5.66699V6.22266H13.5V5.66699C13.5 4.79024 12.7866 4.07443 11.9004 4.07422H4.09961Z"
        fill={color}
      />
    </svg>
  );
};

CalendarBold16.category = 'Interface General';

export default CalendarBold16;
