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
      data-fui-icon="WebcamOnPlusBoldFilled20"
      {...props}
    >
      <path
        d="M10 2.75c2.17 0 4.015 1.382 4.707 3.313l.943-.86C16.934 4.028 19 4.938 19 6.677v6.648c0 1.74-2.066 2.65-3.35 1.476l-.944-.864c-.693 1.93-2.537 3.312-4.706 3.312H6c-2.761 0-5-2.239-5-5v-4.5c0-2.761 2.239-5 5-5h4zM8 5.875c-.621 0-1.125.504-1.125 1.125v1.875H5c-.621 0-1.125.504-1.125 1.125S4.379 11.125 5 11.125h1.875V13c0 .621.504 1.125 1.125 1.125S9.125 13.621 9.125 13v-1.875H11c.621 0 1.125-.504 1.125-1.125S11.621 8.875 11 8.875H9.125V7c0-.621-.504-1.125-1.125-1.125z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusBoldFilled20.category = 'Interface General';

export default WebcamOnPlusBoldFilled20;
