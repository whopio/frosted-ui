import * as React from 'react';
import { IconProps } from './types';

export const CalendarBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarBold32"
      {...props}
    >
      <path
        d="M22 .034c.552 0 1 .448 1 1V4h1.145C27.93 4 31 7.07 31 10.855v13.29C31 27.93 27.93 31 24.145 31H7.855C4.07 31 1 27.93 1 24.144V10.855C1 7.07 4.07 4 7.855 4H9V1.034c0-.552.448-1 1-1s1 .448 1 1V4h10V1.034c0-.552.448-1 1-1zM3 24.144C3 26.826 5.174 29 7.855 29h16.29C26.826 29 29 26.826 29 24.144V12H3v12.144zM9.5 22c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm7 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm7 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm-14-6c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm7 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm7 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zM7.855 6c-2.39 0-4.375 1.726-4.779 4h25.848c-.404-2.274-2.39-4-4.78-4H7.855z"
        fill={color}
      />
    </svg>
  );
};

CalendarBold32.category = 'Interface General';

export default CalendarBold32;
