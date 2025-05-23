import * as React from 'react';
import { IconProps } from './types';

export const DollarCircleFilled16 = ({
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
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.625 4.5C5.4514 4.5 4.5 5.4514 4.5 6.625C4.5 7.7986 5.4514 8.75 6.625 8.75H9.375C9.72018 8.75 10 9.02982 10 9.375C10 9.72018 9.72018 10 9.375 10H8H5.75C5.33579 10 5 10.3358 5 10.75C5 11.1642 5.33579 11.5 5.75 11.5H7.25V12.25C7.25 12.6642 7.58579 13 8 13C8.41421 13 8.75 12.6642 8.75 12.25V11.5H9.375C10.5486 11.5 11.5 10.5486 11.5 9.375C11.5 8.2014 10.5486 7.25 9.375 7.25H6.625C6.27982 7.25 6 6.97018 6 6.625C6 6.27982 6.27982 6 6.625 6H8H10.25C10.6642 6 11 5.66421 11 5.25C11 4.83579 10.6642 4.5 10.25 4.5H8.75V3.75C8.75 3.33579 8.41421 3 8 3C7.58579 3 7.25 3.33579 7.25 3.75V4.5H6.625Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DollarCircleFilled16;
