import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline16 = ({
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
        d="M7 3.25C7 2.83579 7.33579 2.5 7.75 2.5C8.16421 2.5 8.5 2.83579 8.5 3.25C8.5 3.66421 8.16421 4 7.75 4C7.33579 4 7 3.66421 7 3.25ZM7.75 1C6.50736 1 5.5 2.00736 5.5 3.25C5.5 4.49264 6.50736 5.5 7.75 5.5C8.99264 5.5 10 4.49264 10 3.25C10 2.00736 8.99264 1 7.75 1ZM5.75 6C5.33579 6 5 6.33579 5 6.75C5 7.16421 5.33579 7.5 5.75 7.5H6V13.5H5.75C5.33579 13.5 5 13.8358 5 14.25C5 14.6642 5.33579 15 5.75 15H6.75H9.25H10.25C10.6642 15 11 14.6642 11 14.25C11 13.8358 10.6642 13.5 10.25 13.5H10V6.75C10 6.33579 9.66421 6 9.25 6H6.75H5.75ZM8.5 13.5H7.5V7.5H8.5V13.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default InfoOutline16;
