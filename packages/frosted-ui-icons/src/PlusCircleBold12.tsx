import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1c.552 0 1 .448 1 1v1h1c.552 0 1 .448 1 1s-.448 1-1 1H7v1c0 .552-.448 1-1 1s-1-.448-1-1V7H4c-.552 0-1-.448-1-1s.448-1 1-1h1V4c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold12.category = 'Interface General';

export default PlusCircleBold12;
