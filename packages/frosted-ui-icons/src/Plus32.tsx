import * as React from 'react';
import { IconProps } from './types';

export const Plus32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.25 28.25C15.25 28.6642 15.5858 29 16 29C16.4142 29 16.75 28.6642 16.75 28.25V16.75H28.25C28.6642 16.75 29 16.4142 29 16C29 15.5858 28.6642 15.25 28.25 15.25H16.75V3.75C16.75 3.33579 16.4142 3 16 3C15.5858 3 15.25 3.33579 15.25 3.75V15.25H3.75C3.33579 15.25 3 15.5858 3 16C3 16.4142 3.33579 16.75 3.75 16.75H15.25V28.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Plus32;
