import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebar20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.75 2.25H4.5C2.42893 2.25 0.75 3.92893 0.75 6V14C0.75 16.0711 2.42893 17.75 4.5 17.75H7.75M7.75 2.25H15.5C17.5711 2.25 19.25 3.92893 19.25 6V14C19.25 16.0711 17.5711 17.75 15.5 17.75H7.75M7.75 2.25V17.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CollapseSidebar20;
