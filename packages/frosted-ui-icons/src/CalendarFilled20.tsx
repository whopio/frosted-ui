import * as React from 'react';
import { IconProps } from './types';

export const CalendarFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarFilled20"
      {...props}
    >
      <path
        d="M19 14.45c0 2.513-2.037 4.55-4.55 4.55h-8.9C3.037 19 1 16.963 1 14.45V8h18v6.45zM5.75 14c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1c0-.276-.224-.5-.5-.5h-1zm3.75 0c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1c0-.276-.224-.5-.5-.5h-1zm3.75 0c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1c0-.276-.224-.5-.5-.5h-1zm-7.5-3.5c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1c0-.276-.224-.5-.5-.5h-1zm3.75 0c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1c0-.276-.224-.5-.5-.5h-1zm3.75 0c-.276 0-.5.224-.5.5v1c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-1c0-.276-.224-.5-.5-.5h-1zm.5-10.25c.414 0 .75.336.75.75v1.001c2.473.027 4.472 2.026 4.499 4.499H1.001C1.028 4.027 3.027 2.028 5.5 2.001V1c0-.414.336-.75.75-.75S7 .586 7 1v1h6V1c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

CalendarFilled20.category = 'Interface General';

export default CalendarFilled20;
