import * as React from 'react';
import { IconProps } from './types';

export const BarChart220 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 8.25C4.41421 8.25 4.75 8.58579 4.75 9V17.25C4.75 17.6642 4.41421 18 4 18C3.58579 18 3.25 17.6642 3.25 17.25V9C3.25 8.58579 3.58579 8.25 4 8.25ZM8 2C8.41421 2 8.75 2.33579 8.75 2.75V17.25C8.75 17.6642 8.41421 18 8 18C7.58579 18 7.25 17.6642 7.25 17.25V2.75C7.25 2.33579 7.58579 2 8 2ZM12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V13C11.25 12.5858 11.5858 12.25 12 12.25ZM16 6C16.4142 6 16.75 6.33579 16.75 6.75V17.25C16.75 17.6642 16.4142 18 16 18C15.5858 18 15.25 17.6642 15.25 17.25V6.75C15.25 6.33579 15.5858 6 16 6Z"
        fill={color}
      />
    </svg>
  );
};

BarChart220.category = 'Stats & Charts';

export default BarChart220;
