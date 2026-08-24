import * as React from 'react';
import { IconProps } from './types';

export const UserCheckmark20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserCheckmark20"
      {...props}
    >
      <path
        d="M10 11.75c.958 0 1.879.155 2.735.438.394.13.607.553.477.947-.13.393-.554.607-.947.477-.708-.233-1.47-.362-2.265-.362-3.815 0-6.75 2.63-6.75 6 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-4.362 3.78-7.5 8.25-7.5zm7.72 2.72c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-4.25 4.25c-.293.293-.767.293-1.06 0l-1.75-1.75c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L14 18.19l3.72-3.72zM10 0c2.9 0 5.25 2.35 5.25 5.25S12.9 10.5 10 10.5 4.75 8.15 4.75 5.25 7.1 0 10 0zm0 1.5c-2.071 0-3.75 1.679-3.75 3.75C6.25 7.32 7.929 9 10 9c2.07 0 3.75-1.68 3.75-3.75 0-2.071-1.679-3.75-3.75-3.75z"
        fill={color}
      />
    </svg>
  );
};

UserCheckmark20.category = 'People';

export default UserCheckmark20;
