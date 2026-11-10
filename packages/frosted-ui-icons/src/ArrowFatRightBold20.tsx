import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBold20"
      {...props}
    >
      <path
        d="M3.147 6h6.547c.169 0 .306-.137.306-.306V3.021c0-.404.485-.61.777-.33l6.932 6.647c.377.36.377.963 0 1.325l-6.932 6.647c-.292.28-.777.073-.777-.331v-2.673c0-.169-.137-.306-.306-.306H3.147C2.514 14 2 13.486 2 12.853V7.147C2 6.514 2.514 6 3.147 6z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold20.category = 'Arrows';

export default ArrowFatRightBold20;
