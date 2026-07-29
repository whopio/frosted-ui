import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmall16"
      {...props}
    >
      <path
        d="M12.25 7.25C12.6642 7.25 13 7.58579 13 8C13 8.41421 12.6642 8.75 12.25 8.75H3.75C3.33579 8.75 3 8.41421 3 8C3 7.58579 3.33579 7.25 3.75 7.25H12.25Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmall16.category = 'Interface General';

export default SubtractSmall16;
