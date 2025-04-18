import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M11.25 5.75V4.09C11.25 3.62608 10.8739 3.25 10.41 3.25H6.38926C6.14558 3.25 5.91752 3.13003 5.77947 2.92923L4.84553 1.57077C4.70748 1.36997 4.47942 1.25 4.23574 1.25H1.59C1.12608 1.25 0.75 1.62608 0.75 2.09V9.91C0.75 10.3739 1.12608 10.75 1.59 10.75H5.25M6.75 8.75H10.75M8.75 10.75V6.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FolderAdd12;
