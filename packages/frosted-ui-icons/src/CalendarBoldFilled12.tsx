import * as React from 'react';
import { IconProps } from './types';

export const CalendarBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CalendarBoldFilled12"
      {...props}
    >
      <path
        d="M8.368 0c.552 0 1 .448 1 1v.904h.317c1.182 0 2.315.89 2.315 2.192V9.81C12 11.11 10.867 12 9.685 12h-7.37C1.133 12 0 11.111 0 9.81V4.096c0-1.302 1.133-2.192 2.315-2.192h.317V1c0-.552.448-1 1-1s1 .448 1 1v.904h2.736V1c0-.552.448-1 1-1zM2 9.81c0 .018.006.055.057.1.052.047.14.09.258.09h7.37c.118 0 .206-.043.258-.09.05-.045.057-.082.057-.1V6.762H2V9.81z"
        fill={color}
      />
    </svg>
  );
};

CalendarBoldFilled12.category = 'Interface General';

export default CalendarBoldFilled12;
