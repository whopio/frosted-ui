import * as React from 'react';
import { IconProps } from './types';

export const GridAdd32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M28.2501 23.5H18.7501M23.5001 28.25V18.75M6.35 13.75H11.15C12.5859 13.75 13.75 12.5859 13.75 11.15V6.35C13.75 4.91406 12.5859 3.75 11.15 3.75H6.35C4.91406 3.75 3.75 4.91406 3.75 6.35V11.15C3.75 12.5859 4.91406 13.75 6.35 13.75ZM6.35 28.25H11.15C12.5859 28.25 13.75 27.0859 13.75 25.65V20.85C13.75 19.4141 12.5859 18.25 11.15 18.25H6.35C4.91406 18.25 3.75 19.4141 3.75 20.85V25.65C3.75 27.0859 4.91406 28.25 6.35 28.25ZM20.85 13.75H25.65C27.0859 13.75 28.25 12.5859 28.25 11.15V6.35C28.25 4.91406 27.0859 3.75 25.65 3.75H20.85C19.4141 3.75 18.25 4.91406 18.25 6.35V11.15C18.25 12.5859 19.4141 13.75 20.85 13.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GridAdd32;
