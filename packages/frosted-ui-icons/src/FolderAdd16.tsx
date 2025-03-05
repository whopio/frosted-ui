import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.25 7.25V4.77C15.25 4.20667 14.7933 3.75 14.23 3.75H7.42361C7.15561 3.75 6.90187 3.62923 6.73287 3.42123L5.64213 2.07877C5.47313 1.87077 5.21939 1.75 4.95139 1.75H1.77C1.20667 1.75 0.75 2.20667 0.75 2.77V12.23C0.75 12.7933 1.20667 13.25 1.77 13.25H9.25M10.75 11H15.25M13 13.25V8.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FolderAdd16;
