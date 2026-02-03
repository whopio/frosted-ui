import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.25 0C14.8734 0 17 2.12665 17 4.75V15.25C17 17.8734 14.8734 20 12.25 20H7.75C5.12665 20 3 17.8734 3 15.25V4.75C3 2.12665 5.12665 0 7.75 0H12.25ZM7.75 1.5C5.95507 1.5 4.5 2.95507 4.5 4.75V15.25C4.5 17.0449 5.95507 18.5 7.75 18.5H12.25C14.0449 18.5 15.5 17.0449 15.5 15.25V4.75C15.5 2.95507 14.0449 1.5 12.25 1.5H7.75ZM11.75 15.5C12.1642 15.5 12.5 15.8358 12.5 16.25C12.5 16.6642 12.1642 17 11.75 17H8.25C7.83579 17 7.5 16.6642 7.5 16.25C7.5 15.8358 7.83579 15.5 8.25 15.5H11.75Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhone20.category = 'Objects';

export default MobilePhone20;
