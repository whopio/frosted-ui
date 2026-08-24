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
        d="M4 5.8V1.75c0-.414.336-.75.75-.75h2.5c.414 0 .75.336.75.75V5.8c0 .11.09.2.2.2h2.1c.264 0 .4.316.217.507l-4.083 4.287c-.236.248-.632.248-.869 0L1.483 6.507C1.3 6.316 1.436 6 1.7 6h2.1c.11 0 .2-.09.2-.2z"
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
