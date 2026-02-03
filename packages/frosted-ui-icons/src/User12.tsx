import * as React from 'react';
import { IconProps } from './types';

export const User12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 6.75C9.15982 6.75 11.5 8.78566 11.5 11.25C11.5 11.6642 11.1642 12 10.75 12C10.3358 12 10 11.6642 10 11.25C10 9.84834 8.58688 8.25 6 8.25C3.41312 8.25 2 9.84834 2 11.25C2 11.6642 1.66421 12 1.25 12C0.835786 12 0.5 11.6642 0.5 11.25C0.5 8.78566 2.84018 6.75 6 6.75ZM6 0C7.65685 0 9 1.34315 9 3C9 4.65685 7.65685 6 6 6C4.34315 6 3 4.65685 3 3C3 1.34315 4.34315 0 6 0ZM6 1.5C5.17157 1.5 4.5 2.17157 4.5 3C4.5 3.82843 5.17157 4.5 6 4.5C6.82843 4.5 7.5 3.82843 7.5 3C7.5 2.17157 6.82843 1.5 6 1.5Z"
        fill={color}
      />
    </svg>
  );
};

User12.category = 'People';

export default User12;
