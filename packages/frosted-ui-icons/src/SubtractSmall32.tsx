import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall32"
      {...props}
    >
      <path
        d="M24.25 15.25C24.6642 15.25 25 15.5858 25 16C25 16.4142 24.6642 16.75 24.25 16.75H7.75C7.33579 16.75 7 16.4142 7 16C7 15.5858 7.33579 15.25 7.75 15.25H24.25Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall32.category = 'Interface General';

export default SubtractSmall32;
