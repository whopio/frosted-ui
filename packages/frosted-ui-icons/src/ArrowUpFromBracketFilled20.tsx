import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketFilled20"
      {...props}
    >
      <path
        d="M17.75 9.5c.69 0 1.25.56 1.25 1.25v2.5c0 3.176-2.574 5.75-5.75 5.75h-6.5C3.574 19 1 16.426 1 13.25v-2.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v2.5c0 1.795 1.455 3.25 3.25 3.25h6.5c1.795 0 3.25-1.455 3.25-3.25v-2.5c0-.69.56-1.25 1.25-1.25zM8.948 1.374c.655-.534 1.62-.496 2.23.114l4.129 4.128c.487.488.487 1.28 0 1.768-.489.488-1.28.488-1.769 0L11.25 5.096v6.654c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V5.095L6.46 7.384c-.487.488-1.279.488-1.767 0s-.488-1.28 0-1.768l4.128-4.128.127-.114z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketFilled20.category = 'Arrows';

export default ArrowUpFromBracketFilled20;
