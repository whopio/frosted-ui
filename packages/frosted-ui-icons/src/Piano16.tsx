import * as React from 'react';
import { IconProps } from './types';

export const Piano16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Piano16"
      {...props}
    >
      <path
        d="M11.75 0C14.097 0 16 1.903 16 4.25v7.5c0 2.347-1.903 4.25-4.25 4.25h-7.5C1.903 16 0 14.097 0 11.75v-7.5C0 1.903 1.903 0 4.25 0h7.5zM7.5 7.5c0 .932-.638 1.711-1.5 1.934V14.5h4V9.434C9.138 9.21 8.5 8.432 8.5 7.5v-6h-1v6zm5.5 0c0 .932-.638 1.711-1.5 1.934V14.5h.25c1.519 0 2.75-1.231 2.75-2.75v-7.5c0-1.068-.61-1.992-1.5-2.447V7.5zM3 1.803c-.89.455-1.5 1.379-1.5 2.447v7.5c0 1.519 1.231 2.75 2.75 2.75h.25V9.434C3.638 9.21 3 8.432 3 7.5V1.803zM4.5 7.5c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-6H4.5v6zm5.5 0c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5v-6H10v6z"
        fill={color}
      />
    </svg>
  );
};

Piano16.category = 'Sound & Music';

export default Piano16;
