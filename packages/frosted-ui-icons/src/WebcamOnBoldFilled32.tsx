import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnBoldFilled32"
      {...props}
    >
      <path
        d="M16.523 4.5c3.659 0 6.701 2.629 7.348 6.1l3.293-2.62C28.713 6.746 31 7.85 31 9.83v12.427c0 1.952-2.233 3.063-3.79 1.885l-3.376-2.555c-.72 3.378-3.719 5.913-7.311 5.913H8.478C4.348 27.5 1 24.152 1 20.023v-8.046C1 7.847 4.348 4.5 8.478 4.5h8.045z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBoldFilled32.category = 'Interface General';

export default WebcamOnBoldFilled32;
