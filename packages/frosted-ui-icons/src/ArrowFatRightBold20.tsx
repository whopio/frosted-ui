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
        d="M9.694 6H3.147C2.514 6 2 6.514 2 7.147v5.706C2 13.486 2.514 14 3.147 14h6.547c.169 0 .306.137.306.306v2.673c0 .404.485.61.777.33l6.932-6.647c.377-.36.377-.963 0-1.324L10.777 2.69c-.292-.28-.777-.073-.777.331v2.673c0 .169-.137.306-.306.306z"
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
