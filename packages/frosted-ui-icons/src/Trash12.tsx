import * as React from 'react';
import { IconProps } from './types';

export const Trash12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash12"
      {...props}
    >
      <path
        d="M8.75 3.25l-.35-.875C8.007 1.393 7.057.75 6 .75s-2.007.643-2.4 1.625l-.35.875m5.5 0h-5.5m5.5 0H10m-6.75 0H2m-1.25 0H2m0 0l.836 6.686c.094.75.732 1.314 1.488 1.314h3.352c.756 0 1.394-.563 1.488-1.314L10 3.25m0 0h1.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Trash12.category = 'Interface General';

export default Trash12;
