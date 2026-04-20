import * as React from 'react';
import { IconProps } from './types';

export const BarChart2Bold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4 8C4.55228 8 5 8.44772 5 9V17.25C5 17.8023 4.55228 18.25 4 18.25C3.44772 18.25 3 17.8023 3 17.25V9C3 8.44772 3.44772 8 4 8ZM8 1.75C8.55228 1.75 9 2.19772 9 2.75V17.25C9 17.8023 8.55228 18.25 8 18.25C7.44772 18.25 7 17.8023 7 17.25V2.75C7 2.19772 7.44772 1.75 8 1.75ZM12 12C12.5523 12 13 12.4477 13 13V17.25C13 17.8023 12.5523 18.25 12 18.25C11.4477 18.25 11 17.8023 11 17.25V13C11 12.4477 11.4477 12 12 12ZM16 5.75C16.5523 5.75 17 6.19772 17 6.75V17.25C17 17.8023 16.5523 18.25 16 18.25C15.4477 18.25 15 17.8023 15 17.25V6.75C15 6.19772 15.4477 5.75 16 5.75Z"
        fill={color}
      />
    </svg>
  );
};

BarChart2Bold20.category = 'Stats & Charts';

export default BarChart2Bold20;
