import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBold12"
      {...props}
    >
      <path
        d="M4 1.75V5.8c0 .11-.09.2-.2.2H1.7c-.264 0-.4.316-.217.507l4.082 4.287c.237.248.633.248.87 0l4.082-4.287C10.7 6.316 10.564 6 10.3 6H8.2c-.11 0-.2-.09-.2-.2V1.75C8 1.336 7.664 1 7.25 1h-2.5c-.414 0-.75.336-.75.75z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold12.category = 'Arrows';

export default ArrowFatDownBold12;
