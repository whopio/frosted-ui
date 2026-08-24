import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusRectangleBold12"
      {...props}
    >
      <path
        d="M8 0c2.21 0 4 1.79 4 4v4c0 2.208-1.79 3.999-4 3.999H4c-2.208 0-3.999-1.79-3.999-4V4c0-2.208 1.79-3.999 4-3.999h4zM4 2c-1.104 0-1.999.895-2 2v4c0 1.104.896 2 2 2h4c1.105 0 2-.896 2-2V4c0-1.105-.895-2-2-2H4zM6 3c.552 0 1 .448 1 1v1h1c.552 0 1 .448 1 1 0 .553-.448 1-1 1h-1v1c0 .553-.448 1-1 1-.553 0-1-.448-1-1V7h-1c-.552 0-1-.447-1-1 0-.552.448-1 1-1h1V4c0-.552.447-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleBold12.category = 'Interface General';

export default PlusRectangleBold12;
