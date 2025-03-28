import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M10 5.5C10.4142 5.5 10.75 5.83579 10.75 6.25V10.25C10.75 10.6642 10.4142 11 10 11C9.58579 11 9.25 10.6642 9.25 10.25V6.25C9.25 5.83579 9.58579 5.5 10 5.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M11 13.5C11 14.0523 10.5523 14.5 10 14.5C9.44772 14.5 9 14.0523 9 13.5C9 12.9477 9.44772 12.5 10 12.5C10.5523 12.5 11 12.9477 11 13.5Z"
        fill={color}
      />
      <path
        d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ExclamationCircle20;
