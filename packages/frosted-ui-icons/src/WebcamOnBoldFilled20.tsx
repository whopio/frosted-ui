import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 2.75C12.1694 2.75 14.0149 4.1321 14.707 6.06348L15.6504 5.20215C16.9336 4.02879 18.9996 4.93898 19 6.67773V13.3262C19 15.0653 16.9337 15.9755 15.6504 14.8018L14.7061 13.9385C14.0134 15.8688 12.1687 17.25 10 17.25H6C3.23858 17.25 1 15.0114 1 12.25V7.75C1 4.98858 3.23858 2.75 6 2.75H10Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBoldFilled20.category = 'Interface General';

export default WebcamOnBoldFilled20;
