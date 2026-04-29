import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM7.96875 4.5C7.55454 4.5 7.21875 4.83579 7.21875 5.25V7.21875H5.25C4.83579 7.21875 4.5 7.55454 4.5 7.96875C4.5 8.38296 4.83579 8.71875 5.25 8.71875H7.21875V10.6875C7.21875 11.1017 7.55454 11.4375 7.96875 11.4375C8.38296 11.4375 8.71875 11.1017 8.71875 10.6875V8.71875H10.6875C11.1017 8.71875 11.4375 8.38296 11.4375 7.96875C11.4375 7.55454 11.1017 7.21875 10.6875 7.21875H8.71875V5.25C8.71875 4.83579 8.38296 4.5 7.96875 4.5Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleFilled16.category = 'Interface General';

export default PlusCircleFilled16;
