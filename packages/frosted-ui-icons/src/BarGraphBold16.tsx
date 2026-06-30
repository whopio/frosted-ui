import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4 8C4.55228 8 5 8.44772 5 9V14C5 14.5523 4.55228 15 4 15H2C1.44772 15 1 14.5523 1 14V9C1 8.44772 1.44772 8 2 8H4ZM9 1C9.55229 1 10 1.44772 10 2V14C10 14.5523 9.55229 15 9 15H7C6.44772 15 6 14.5523 6 14V2C6 1.44772 6.44772 1 7 1H9ZM14 5C14.5523 5 15 5.44772 15 6V14L14.9951 14.1025C14.9472 14.573 14.573 14.9472 14.1025 14.9951L14 15H12L11.8975 14.9951C11.427 14.9472 11.0528 14.573 11.0049 14.1025L11 14V6C11 5.44772 11.4477 5 12 5H14ZM2.5 13.5H3.5V9.5H2.5V13.5ZM7.5 13.5H8.5V2.5H7.5V13.5ZM12.5 13.5H13.5V6.5H12.5V13.5Z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBold16.category = 'Stats & Charts';

export default BarGraphBold16;
