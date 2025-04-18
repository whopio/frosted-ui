import * as React from 'react';
import { IconProps } from './types';

export const CursorOutline20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.28719 4.14917C1.87698 2.99232 2.9922 1.8771 4.14905 2.28731L17.3385 6.96422C18.596 7.41015 18.644 9.17087 17.4126 9.68462L13.4147 11.3524L16.7603 14.698C17.3298 15.2675 17.3298 16.1909 16.7603 16.7604C16.1908 17.3299 15.2674 17.3299 14.6979 16.7604L11.3523 13.4148L9.68451 17.4127C9.17076 18.6441 7.41003 18.5962 6.9641 17.3386L2.28719 4.14917Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CursorOutline20;
