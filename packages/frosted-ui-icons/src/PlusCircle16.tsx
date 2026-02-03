import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_1057_1133)">
        <path
          d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM8 4C8.41421 4 8.75 4.33579 8.75 4.75V7.25H11.25C11.6641 7.25 11.9998 7.58594 12 8C12 8.41421 11.6642 8.75 11.25 8.75H8.75V11.25C8.75 11.6642 8.41421 12 8 12C7.58581 12 7.25 11.6642 7.25 11.25V8.75H4.75C4.33579 8.75 4 8.41421 4 8C4.00018 7.58594 4.3359 7.25 4.75 7.25H7.25V4.75C7.25 4.33581 7.58581 4.00003 8 4Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1057_1133">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusCircle16;
