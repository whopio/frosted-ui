import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.25 3C12.4455 3 14.2917 4.48999 14.8359 6.51367L16.0693 5.38672C17.1922 4.36018 18.9996 5.1564 19 6.67773V13.3262C19 14.8477 17.1923 15.6446 16.0693 14.6182L14.835 13.4893C14.2897 15.5114 12.4445 17 10.25 17H5.75C3.12665 17 1 14.8734 1 12.25V7.75C1 5.12665 3.12665 3 5.75 3H10.25ZM8 6C7.58579 6 7.25 6.33579 7.25 6.75V9.25H4.75C4.33579 9.25 4 9.58579 4 10C4 10.4142 4.33579 10.75 4.75 10.75H7.25V13.25C7.25 13.6642 7.58579 14 8 14C8.41421 14 8.75 13.6642 8.75 13.25V10.75H11.25C11.6642 10.75 12 10.4142 12 10C12 9.58579 11.6642 9.25 11.25 9.25H8.75V6.75C8.75 6.33579 8.41421 6 8 6Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusFilled20.category = 'Interface General';

export default WebcamOnPlusFilled20;
