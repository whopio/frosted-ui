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
        d="M31 24.145C31 27.93 27.93 31 24.145 31H7.855C4.07 31 1 27.93 1 24.145V12h30v12.145zM8.5 22.5c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-1zm7 0c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-1zm7 0c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-1zm-14-6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-1zm7 0c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-1zm7 0c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-1zM22 .033c.552 0 1 .448 1 1V4h1.145c3.496 0 6.38 2.618 6.8 6H1.055c.42-3.382 3.304-6 6.8-6H9V1.033c0-.552.448-1 1-1s1 .448 1 1V4h10V1.033c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

CalendarBoldFilled32.category = 'Interface General';

export default CalendarBoldFilled32;
