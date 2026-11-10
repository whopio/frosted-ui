import * as React from 'react';
import { IconProps } from './types';

export const CursorBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBold20"
      {...props}
    >
      <path
        d="M2.14 4.243l4.584 13.048c.309.878 1.502 1 1.98.201l1.887-3.144c.335-.558 1.105-.652 1.565-.192l3.43 3.43c.265.265.625.414 1 .414.78 0 1.414-.633 1.414-1.414 0-.375-.149-.735-.414-1l-3.43-3.43c-.46-.46-.366-1.23.192-1.565l3.144-1.886c.799-.48.677-1.672-.201-1.981L4.243 2.139c-1.306-.458-2.562.798-2.104 2.104z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold20.category = 'Arrows';

export default CursorBold20;
