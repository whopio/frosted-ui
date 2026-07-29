import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall12"
      {...props}
    >
      <path
        d="M9.25 5.25C9.66421 5.25 10 5.58579 10 6C10 6.41421 9.66421 6.75 9.25 6.75H2.75C2.33579 6.75 2 6.41421 2 6C2 5.58579 2.33579 5.25 2.75 5.25H9.25Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall12.category = 'Interface General';

export default SubtractSmall12;
