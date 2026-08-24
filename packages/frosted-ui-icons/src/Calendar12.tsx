import * as React from 'react';
import { IconProps } from './types';

export const Calendar12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Calendar12"
      {...props}
    >
      <path
        d="M8.25 0c.414 0 .75.336.75.75V2h.5c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-7c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2H3V.75c0-.414.336-.75.75-.75s.75.336.75.75V2h3V.75c0-.414.336-.75.75-.75zM2 10c0 .276.224.5.5.5h7c.276 0 .5-.224.5-.5V6.5H2V10zm.5-6.5c-.276 0-.5.224-.5.5v1h8V4c0-.276-.224-.5-.5-.5h-7z"
        fill={color}
      />
    </svg>
  );
};

Calendar12.category = 'Interface General';

export default Calendar12;
