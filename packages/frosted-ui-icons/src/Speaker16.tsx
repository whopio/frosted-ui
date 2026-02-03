import * as React from 'react';
import { IconProps } from './types';

export const Speaker16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.5 0C12.7091 0 14.5 1.79086 14.5 4V12C14.5 14.2091 12.7091 16 10.5 16H5.5C3.29086 16 1.5 14.2091 1.5 12V4C1.5 1.79086 3.29086 0 5.5 0H10.5ZM5.5 1.5C4.11929 1.5 3 2.61929 3 4V12C3 13.3807 4.11929 14.5 5.5 14.5H10.5C11.8807 14.5 13 13.3807 13 12V4C13 2.61929 11.8807 1.5 10.5 1.5H5.5ZM8 6.5C9.65685 6.5 11 7.84315 11 9.5C11 11.1569 9.65685 12.5 8 12.5C6.34315 12.5 5 11.1569 5 9.5C5 7.84315 6.34315 6.5 8 6.5ZM8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8ZM8 3.5C8.55228 3.5 9 3.94772 9 4.5C9 5.05228 8.55228 5.5 8 5.5C7.44772 5.5 7 5.05228 7 4.5C7 3.94772 7.44772 3.5 8 3.5Z"
        fill={color}
      />
    </svg>
  );
};

Speaker16.category = 'Sound & Music';

export default Speaker16;
