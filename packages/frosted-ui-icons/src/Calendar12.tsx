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
        d="M8.25 0c.414 0 .75.336.75.75v.775c1.55.197 2.75 1.521 2.75 3.125v4.2c0 1.74-1.41 3.15-3.15 3.15H3.4C1.66 12 .25 10.59.25 8.85v-4.2c0-1.604 1.2-2.928 2.75-3.125V.75c0-.414.336-.75.75-.75s.75.336.75.75v.75h3V.75c0-.414.336-.75.75-.75zm-6.5 8.85c0 .91.74 1.65 1.65 1.65h5.2c.91 0 1.65-.74 1.65-1.65V6h-8.5v2.85zM3.4 3c-.86 0-1.566.66-1.642 1.5h8.484C10.166 3.66 9.46 3 8.6 3H3.4z"
        fill={color}
      />
    </svg>
  );
};

Calendar12.category = 'Interface General';

export default Calendar12;
