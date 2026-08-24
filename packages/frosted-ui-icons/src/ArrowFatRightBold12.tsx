import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBold12"
      {...props}
    >
      <path
        d="M5.8 4H1.75c-.414 0-.75.336-.75.75v2.5c0 .414.336.75.75.75H5.8c.11 0 .2.09.2.2v2.1c0 .264.316.4.507.217l4.287-4.083c.248-.236.248-.632 0-.869L6.507 1.483C6.316 1.3 6 1.436 6 1.7v2.1c0 .11-.09.2-.2.2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold12.category = 'Arrows';

export default ArrowFatRightBold12;
