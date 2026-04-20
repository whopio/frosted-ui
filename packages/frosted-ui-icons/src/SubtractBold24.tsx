import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.25 11C22.8021 11.0002 23.25 11.4478 23.25 12C23.25 12.5522 22.8021 12.9998 22.25 13H1.75C1.19785 12.9998 0.750001 12.5522 0.75 12C0.750001 11.4478 1.19785 11.0002 1.75 11H22.25Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBold24.category = 'Interface General';

export default SubtractBold24;
