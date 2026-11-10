import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBold12"
      {...props}
    >
      <path
        d="M4 10.25V6.2c0-.11-.09-.2-.2-.2H1.7c-.264 0-.4-.316-.217-.507l4.082-4.287c.237-.248.633-.248.87 0l4.082 4.287c.182.191.047.507-.217.507H8.2c-.11 0-.2.09-.2.2v4.05c0 .414-.336.75-.75.75h-2.5c-.414 0-.75-.336-.75-.75z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold12.category = 'Arrows';

export default ArrowFatUpBold12;
