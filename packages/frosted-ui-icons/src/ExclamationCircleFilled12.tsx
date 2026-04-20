import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 7.375C5.51675 7.375 5.125 7.76675 5.125 8.25V8.25977C5.125 8.74301 5.51675 9.13477 6 9.13477C6.48325 9.13477 6.875 8.74301 6.875 8.25977V8.25C6.875 7.76675 6.48325 7.375 6 7.375ZM6 3C5.58579 3 5.25 3.33579 5.25 3.75V5.75C5.25 6.16421 5.58579 6.5 6 6.5C6.41421 6.5 6.75 6.16421 6.75 5.75V3.75C6.75 3.33579 6.41421 3 6 3Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleFilled12.category = 'Interface General';

export default ExclamationCircleFilled12;
