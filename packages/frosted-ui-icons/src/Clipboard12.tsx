import * as React from 'react';
import { IconProps } from './types';

export const Clipboard12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.49902 0C8.18825 0 8.75 0.558514 8.75 1.25V1.5C9.99264 1.5 11 2.50736 11 3.75V9.75C11 10.9926 9.99264 12 8.75 12H3.25C2.00736 12 1 10.9926 1 9.75V3.75C1 2.50736 2.00736 1.5 3.25 1.5V1.25C3.25 0.558515 3.81175 0 4.50098 0H7.49902ZM3.25 3C2.83579 3 2.5 3.33579 2.5 3.75V9.75C2.5 10.1642 2.83579 10.5 3.25 10.5H8.75C9.16421 10.5 9.5 10.1642 9.5 9.75V3.75C9.5 3.33579 9.16421 3 8.75 3H8.72461C8.60876 3.57052 8.10471 4 7.5 4H4.5C3.89529 4 3.39124 3.57052 3.27539 3H3.25ZM6.25 7.5C6.66421 7.5 7 7.83579 7 8.25C7 8.66421 6.66421 9 6.25 9H4.75C4.33579 9 4 8.66421 4 8.25C4 7.83579 4.33579 7.5 4.75 7.5H6.25ZM7.25 5C7.66421 5 8 5.33579 8 5.75C8 6.16421 7.66421 6.5 7.25 6.5H4.75C4.33579 6.5 4 6.16421 4 5.75C4 5.33579 4.33579 5 4.75 5H7.25ZM4.75 2.5H7.25V1.5H4.75V2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Clipboard12.category = 'Interface General';

export default Clipboard12;
