import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.75 1.5C7.01069 1.5 8.10263 2.21837 8.6416 3.26758L9.59961 2.5498L9.69434 2.48438C10.6761 1.85318 12 2.55275 12 3.75V8.25C12 9.48607 10.5885 10.1918 9.59961 9.4502L8.6416 8.73145C8.10277 9.78107 7.011 10.5 5.75 10.5H3.25C1.45507 10.5 0 9.04493 0 7.25V4.75C1.28853e-07 2.95507 1.45507 1.5 3.25 1.5H5.75ZM4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V5.25H3C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75H3.75V7.5C3.75 7.91421 4.08579 8.25 4.5 8.25C4.91421 8.25 5.25 7.91421 5.25 7.5V6.75H6C6.41421 6.75 6.75 6.41421 6.75 6C6.75 5.58579 6.41421 5.25 6 5.25H5.25V4.5C5.25 4.08579 4.91421 3.75 4.5 3.75Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusBoldFilled12.category = 'Interface General';

export default WebcamOnPlusBoldFilled12;
