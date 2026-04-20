import * as React from 'react';
import { IconProps } from './types';

export const Ban24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1C18.0751 1 22.9998 5.925 23 12C23 18.0752 18.0752 23 12 23C5.92485 22.9999 1 18.0752 1 12C1.00024 5.92504 5.92501 1.00008 12 1ZM5.83496 19.2246C7.49449 20.6422 9.64637 21.5 12 21.5C17.2468 21.5 21.5 17.2468 21.5 12C21.4999 9.64649 20.6421 7.49442 19.2246 5.83496L5.83496 19.2246ZM12 2.5C6.75343 2.50008 2.50024 6.75347 2.5 12C2.5 14.353 3.35761 16.5047 4.77441 18.1641L18.1641 4.77441C16.5047 3.3576 14.353 2.5 12 2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Ban24.category = 'Interface General';

export default Ban24;
