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
        d="M4 6.2v4.05c0 .414.336.75.75.75h2.5c.414 0 .75-.336.75-.75V6.2c0-.11.09-.2.2-.2h2.1c.264 0 .4-.316.217-.507L6.434 1.206c-.236-.248-.632-.248-.869 0L1.483 5.493C1.3 5.684 1.436 6 1.7 6h2.1c.11 0 .2.09.2.2z"
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
