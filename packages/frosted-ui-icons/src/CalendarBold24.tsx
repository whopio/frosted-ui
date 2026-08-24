import * as React from 'react';
import { IconProps } from './types';

export const CalendarBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarBold24"
      {...props}
    >
      <path
        d="M16.25.75c.552 0 1 .448 1 1v2h1.43c1.971 0 3.57 1.599 3.57 3.57v11.36c0 1.971-1.599 3.57-3.57 3.57H5.32c-1.971 0-3.57-1.599-3.57-3.57V7.32c0-1.971 1.599-3.57 3.57-3.57h1.43v-2c0-.552.448-1 1-1s1 .448 1 1v2h6.5v-2c0-.552.448-1 1-1zM3.75 18.68c0 .867.703 1.57 1.57 1.57h13.36c.867 0 1.57-.703 1.57-1.57v-7.93H3.75v7.93zM5.32 5.75c-.867 0-1.57.703-1.57 1.57v1.43h16.5V7.32c0-.867-.703-1.57-1.57-1.57H5.32z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CalendarBold24.category = 'Interface General';

export default CalendarBold24;
