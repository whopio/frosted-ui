import * as React from 'react';
import { IconProps } from './types';

export const Triangle16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.92137 11.6471L6.73804 2.61581C7.27639 1.6064 8.72322 1.6064 9.26157 2.61581L14.0782 11.6471C14.5863 12.5996 13.896 13.75 12.8165 13.75H3.18314C2.1036 13.75 1.41336 12.5996 1.92137 11.6471Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle16.category = 'Interface General';

export default Triangle16;
