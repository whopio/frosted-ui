import * as React from 'react';
import { IconProps } from './types';

export const Browser24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Browser24"
      {...props}
    >
      <path
        d="M18.25 2C20.873 2 23 4.127 23 6.75v10.5c0 2.623-2.127 4.75-4.75 4.75H5.75C3.127 22 1 19.873 1 17.25V6.75C1 4.127 3.127 2 5.75 2h12.5zM2.5 17.25c0 1.795 1.455 3.25 3.25 3.25h12.5c1.795 0 3.25-1.455 3.25-3.25V10.5h-19v6.75zM5.75 3.5C3.955 3.5 2.5 4.955 2.5 6.75V9h19V6.75c0-1.795-1.455-3.25-3.25-3.25H5.75zM5.5 5.25c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

Browser24.category = 'Interface General';

export default Browser24;
