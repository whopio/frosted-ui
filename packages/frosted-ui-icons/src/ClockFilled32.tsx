import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 2.5C8.54416 2.5 2.5 8.54416 2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C23.4558 29.5 29.5 23.4558 29.5 16C29.5 8.54416 23.4558 2.5 16 2.5ZM15 16.5C15 16.7226 15.0989 16.9337 15.2699 17.0762L19.7698 20.8262C20.088 21.0913 20.5609 21.0483 20.8261 20.7301C21.0912 20.4119 21.0483 19.939 20.73 19.6738L16.5 16.1487V7.0001C16.5 6.58589 16.1642 6.2501 15.75 6.2501C15.3358 6.2501 15 6.58589 15 7.0001V16.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ClockFilled32;
