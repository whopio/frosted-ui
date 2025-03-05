import * as React from 'react';
import { IconProps } from './types';

export const Command20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.75 7.75V5C7.75 3.48122 6.51878 2.25 5 2.25C3.48122 2.25 2.25 3.48122 2.25 5C2.25 6.51878 3.48122 7.75 5 7.75H7.75ZM7.75 7.75H12.25M7.75 7.75V12.25M7.75 12.25V15C7.75 16.5188 6.51878 17.75 5 17.75C3.48122 17.75 2.25 16.5188 2.25 15C2.25 13.4812 3.48122 12.25 5 12.25H7.75ZM7.75 12.25H12.25M12.25 7.75V5C12.25 3.48122 13.4812 2.25 15 2.25C16.5188 2.25 17.75 3.48122 17.75 5C17.75 6.51878 16.5188 7.75 15 7.75H12.25ZM12.25 7.75V12.25M12.25 12.25V15C12.25 16.5188 13.4812 17.75 15 17.75C16.5188 17.75 17.75 16.5188 17.75 15C17.75 13.4812 16.5188 12.25 15 12.25H12.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Command20;
