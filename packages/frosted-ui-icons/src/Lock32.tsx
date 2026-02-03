import * as React from 'react';
import { IconProps } from './types';

export const Lock32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C21.2467 1 25.5 5.25329 25.5 10.5V13.708C27.8084 14.361 29.5 16.4825 29.5 19V25.5C29.5 28.5376 27.0376 31 24 31H8C4.96243 31 2.5 28.5376 2.5 25.5V19C2.5 16.4825 4.19163 14.361 6.5 13.708V10.5C6.5 5.25329 10.7533 1 16 1ZM8 15C5.79086 15 4 16.7909 4 19V25.5C4 27.7091 5.79086 29.5 8 29.5H24C26.2091 29.5 28 27.7091 28 25.5V19C28 16.7909 26.2091 15 24 15H8ZM16 2.5C11.5817 2.5 8 6.08172 8 10.5V13.5H24V10.5C24 6.08172 20.4183 2.5 16 2.5Z"
        fill={color}
      />
    </svg>
  );
};

Lock32.category = 'Security';

export default Lock32;
