import * as React from 'react';
import { IconProps } from './types';

export const Piano12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 0C10.3211 0 12 1.67893 12 3.75V8.25C12 10.3211 10.3211 12 8.25 12H3.75C1.67893 12 0 10.3211 0 8.25V3.75C0 1.67893 1.67893 0 3.75 0H8.25ZM8.25 5.5C8.25 6.43162 7.6122 7.21129 6.75 7.43359V10.5H8.25C9.49264 10.5 10.5 9.49264 10.5 8.25V3.75C10.5 2.50736 9.49264 1.5 8.25 1.5V5.5ZM3.75 1.5C2.50736 1.5 1.5 2.50736 1.5 3.75V8.25C1.5 9.49264 2.50736 10.5 3.75 10.5H5.25V7.43359C4.3878 7.21129 3.75 6.43162 3.75 5.5V1.5ZM5.25 5.5C5.25 5.77614 5.47386 6 5.75 6H6.25C6.52614 6 6.75 5.77614 6.75 5.5V1.5H5.25V5.5Z"
        fill={color}
      />
    </svg>
  );
};

Piano12.category = 'Sound & Music';

export default Piano12;
