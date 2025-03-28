import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline24 = ({
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
        d="M10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5ZM12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2ZM8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H9.5V20.5H8.75C8.33579 20.5 8 20.8358 8 21.25C8 21.6642 8.33579 22 8.75 22H10.25H13.75H15.25C15.6642 22 16 21.6642 16 21.25C16 20.8358 15.6642 20.5 15.25 20.5H14.5V9.75C14.5 9.33579 14.1642 9 13.75 9H10.25H8.75ZM13 10.5V20.5H11V10.5H13Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default InfoOutline24;
