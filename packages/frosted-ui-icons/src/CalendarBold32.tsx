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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.25 1.25C21.8023 1.25 22.25 1.69772 22.25 2.25V4.75H25.1797C27.7036 4.75 29.75 6.79637 29.75 9.32031V25.1797C29.75 27.7036 27.7036 29.75 25.1797 29.75H6.82031C4.29637 29.75 2.25 27.7036 2.25 25.1797V9.32031C2.25 6.79637 4.29637 4.75 6.82031 4.75H9.75V2.25C9.75 1.69772 10.1977 1.25 10.75 1.25C11.3023 1.25 11.75 1.69772 11.75 2.25V4.75H20.25V2.25C20.25 1.69772 20.6977 1.25 21.25 1.25ZM4.25 25.1797C4.25 26.5991 5.40094 27.75 6.82031 27.75H25.1797C26.5991 27.75 27.75 26.5991 27.75 25.1797V13.25H4.25V25.1797ZM6.82031 6.75C5.40094 6.75 4.25 7.90094 4.25 9.32031V11.25H27.75V9.32031C27.75 7.90094 26.5991 6.75 25.1797 6.75H6.82031Z"
        fill={color}
      />
    </svg>
  );
};

CalendarBold32.category = 'Interface General';

export default CalendarBold32;
