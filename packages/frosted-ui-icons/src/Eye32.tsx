import * as React from 'react';
import { IconProps } from './types';

export const Eye32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.25 16C21.25 18.8995 18.8995 21.25 16 21.25C13.1005 21.25 10.75 18.8995 10.75 16C10.75 13.1005 13.1005 10.75 16 10.75C18.8995 10.75 21.25 13.1005 21.25 16Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Eye32.category = 'Accessibility';

export default Eye32;
