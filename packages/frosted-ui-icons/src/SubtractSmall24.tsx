import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall24"
      {...props}
    >
      <path
        d="M18.25 11.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75H5.75C5.33579 12.75 5 12.4142 5 12C5 11.5858 5.33579 11.25 5.75 11.25H18.25Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall24.category = 'Interface General';

export default SubtractSmall24;
