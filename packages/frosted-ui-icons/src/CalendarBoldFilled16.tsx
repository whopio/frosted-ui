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
        d="M15 11c0 2.21-1.79 4-4 4H5c-2.21 0-4-1.79-4-4V7h14v4zm-10 .25c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5H5zm2.75 0c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5h-.5zm2.75 0c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5h-.5zM5 8.75c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5H5zm2.75 0c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5h-.5zm2.75 0c-.276 0-.5.224-.5.5v.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-.5c0-.276-.224-.5-.5-.5h-.5zM11.25 0c.552 0 1 .448 1 1v1.202c1.286.423 2.284 1.477 2.624 2.798H1.126c.34-1.32 1.339-2.375 2.624-2.798V1c0-.552.448-1 1-1s1 .448 1 1v1h4.5V1c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

CalendarBoldFilled16.category = 'Interface General';

export default CalendarBoldFilled16;
