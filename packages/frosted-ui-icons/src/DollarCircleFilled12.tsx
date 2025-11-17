import * as React from 'react';
import { IconProps } from './types';

export const DollarCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM4.875 3C3.83947 3 3 3.83947 3 4.875C3 5.91053 3.83947 6.75 4.875 6.75H7.125C7.33211 6.75 7.5 6.91789 7.5 7.125C7.5 7.33211 7.33211 7.5 7.125 7.5H6H4.25C3.83579 7.5 3.5 7.83579 3.5 8.25C3.5 8.66421 3.83579 9 4.25 9H5.25V9.25C5.25 9.66421 5.58579 10 6 10C6.41421 10 6.75 9.66421 6.75 9.25V9H7.125C8.16053 9 9 8.16053 9 7.125C9 6.08947 8.16053 5.25 7.125 5.25H4.875C4.66789 5.25 4.5 5.08211 4.5 4.875C4.5 4.66789 4.66789 4.5 4.875 4.5H6H7.75C8.16421 4.5 8.5 4.16421 8.5 3.75C8.5 3.33579 8.16421 3 7.75 3H6.75V2.75C6.75 2.33579 6.41421 2 6 2C5.58579 2 5.25 2.33579 5.25 2.75V3H4.875Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DollarCircleFilled12;
