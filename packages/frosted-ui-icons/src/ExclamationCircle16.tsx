import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle16 = ({
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
        d="M8 3.75C8.41421 3.75 8.75 4.08579 8.75 4.5L8.75 7.5C8.75 7.91421 8.41421 8.25 8 8.25C7.58579 8.25 7.25 7.91421 7.25 7.5L7.25 4.5C7.25 4.08579 7.58579 3.75 8 3.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M9 10.5C9 11.0523 8.55228 11.5 8 11.5C7.44772 11.5 7 11.0523 7 10.5C7 9.94772 7.44772 9.5 8 9.5C8.55228 9.5 9 9.94772 9 10.5Z"
        fill={color}
      />
      <path
        d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ExclamationCircle16;
