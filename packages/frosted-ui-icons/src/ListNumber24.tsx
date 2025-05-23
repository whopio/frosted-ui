import * as React from 'react';
import { IconProps } from './types';

export const ListNumber24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.75 16.75H20.25M11.75 7.25H20.25M6.25 9.75V4.75L3.75 6.5M4 14.9318C4 14.9318 4.72373 14.25 5.60886 14.25C6.494 14.25 7.21154 14.8719 7.21154 15.639C7.21154 17.4385 3.75 17.75 3.75 19.25H7.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListNumber24;
