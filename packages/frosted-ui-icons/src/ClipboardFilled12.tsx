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
        d="M7.49902 0C8.32594 0 9 0.670066 9 1.5V1.57422C9.97017 1.82395 10.6875 2.70181 10.6875 3.75V9.75C10.6875 10.9926 9.68014 12 8.4375 12H3.5625C2.31986 12 1.3125 10.9926 1.3125 9.75V3.75C1.3125 2.70181 2.02983 1.82395 3 1.57422V1.5C3 0.670067 3.67406 0 4.50098 0H7.49902ZM4.75 7.75C4.19772 7.75 3.75 8.19771 3.75 8.75C3.75 9.30229 4.19772 9.75 4.75 9.75H6.25C6.80228 9.75 7.25 9.30229 7.25 8.75C7.25 8.19771 6.80228 7.75 6.25 7.75H4.75ZM4.75 4.25C4.19772 4.25 3.75 4.69772 3.75 5.25C3.75 5.80228 4.19772 6.25 4.75 6.25H7.25C7.80228 6.25 8.25 5.80228 8.25 5.25C8.25 4.69772 7.80228 4.25 7.25 4.25H4.75Z"
        fill={color}
      />
    </svg>
  );
};

ClipboardFilled12.category = 'Interface General';

export default ClipboardFilled12;
