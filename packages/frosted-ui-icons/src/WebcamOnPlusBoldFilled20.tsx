import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 2.75C12.1694 2.75 14.0149 4.1321 14.707 6.06348L15.6504 5.20215C16.9336 4.02879 18.9996 4.93898 19 6.67773V13.3262C19 15.0653 16.9337 15.9755 15.6504 14.8018L14.7061 13.9385C14.0134 15.8688 12.1687 17.25 10 17.25H6C3.23858 17.25 1 15.0114 1 12.25V7.75C1 4.98858 3.23858 2.75 6 2.75H10ZM8 5.875C7.37868 5.875 6.875 6.37868 6.875 7V8.875H5C4.37868 8.875 3.875 9.37868 3.875 10C3.875 10.6213 4.37868 11.125 5 11.125H6.875V13C6.875 13.6213 7.37868 14.125 8 14.125C8.62132 14.125 9.125 13.6213 9.125 13V11.125H11C11.6213 11.125 12.125 10.6213 12.125 10C12.125 9.37868 11.6213 8.875 11 8.875H9.125V7C9.125 6.37868 8.62132 5.875 8 5.875Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusBoldFilled20.category = 'Interface General';

export default WebcamOnPlusBoldFilled20;
