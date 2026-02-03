import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 0C11.7091 3.22133e-08 13.5 1.79086 13.5 4V12C13.5 14.2091 11.7091 16 9.5 16H6.5C4.29086 16 2.5 14.2091 2.5 12V4C2.5 1.79086 4.29086 3.22128e-08 6.5 0H9.5ZM6.5 1.5C5.11929 1.5 4 2.61929 4 4V12C4 13.3807 5.11929 14.5 6.5 14.5H9.5C10.8807 14.5 12 13.3807 12 12V4C12 2.61929 10.8807 1.5 9.5 1.5H6.5ZM9.5 12C9.91421 12 10.25 12.3358 10.25 12.75C10.25 13.1642 9.91421 13.5 9.5 13.5H6.5C6.08579 13.5 5.75 13.1642 5.75 12.75C5.75 12.3358 6.08579 12 6.5 12H9.5Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhone16.category = 'Objects';

export default MobilePhone16;
