import * as React from 'react';
import { IconProps } from './types';

export const ClipboardFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.49902 0C8.18825 0 8.75 0.558514 8.75 1.25V1.52344C9.8446 1.67566 10.6875 2.61349 10.6875 3.75V9.75C10.6875 10.9926 9.68014 12 8.4375 12H3.5625C2.31986 12 1.3125 10.9926 1.3125 9.75V3.75C1.3125 2.61349 2.1554 1.67566 3.25 1.52344V1.25C3.25 0.558515 3.81175 0 4.50098 0H7.49902ZM4.75 7.5C4.33579 7.5 4 7.83579 4 8.25C4 8.66421 4.33579 9 4.75 9H6.25C6.66421 9 7 8.66421 7 8.25C7 7.83579 6.66421 7.5 6.25 7.5H4.75ZM4.75 5C4.33579 5 4 5.33579 4 5.75C4 6.16421 4.33579 6.5 4.75 6.5H7.25C7.66421 6.5 8 6.16421 8 5.75C8 5.33579 7.66421 5 7.25 5H4.75ZM4.75 2.5H7.25V1.5H4.75V2.5Z"
        fill={color}
      />
    </svg>
  );
};

ClipboardFilled12.category = 'Interface General';

export default ClipboardFilled12;
