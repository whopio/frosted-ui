import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M30.25 17.25V10.75C30.25 9.64543 29.3546 8.75 28.25 8.75H13.4447C12.8551 8.75 12.3052 8.45309 11.9817 7.96015L10.3933 5.53985C10.0698 5.04691 9.51987 4.75 8.93026 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V25.25C1.75 26.3546 2.64543 27.25 3.75 27.25H20.25M21.75 23H30.25M26 27.25V18.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FolderAdd32;
