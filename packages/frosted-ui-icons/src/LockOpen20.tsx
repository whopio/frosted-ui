import * as React from 'react';
import { IconProps } from './types';

export const LockOpen20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 11.45C2.25 9.95883 3.45883 8.75 4.95 8.75H15.05C16.5412 8.75 17.75 9.95883 17.75 11.45V16.55C17.75 18.0412 16.5412 19.25 15.05 19.25H4.95C3.45883 19.25 2.25 18.0412 2.25 16.55V11.45zM4.75 8.75V5.75C4.75 2.98858 6.98858.75 9.75.75H10.25C12.8112.75 14.9227 2.67576 15.2154 5.1583"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LockOpen20;
