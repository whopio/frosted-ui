import * as React from 'react';
import { IconProps } from './types';

export const CursorBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBold24"
      {...props}
    >
      <path
        d="M2.096 3.9L8.64 21.225c.352.93 1.618 1.054 2.143.209l2.552-4.113c.34-.547 1.101-.635 1.557-.18l4.392 4.393c.298.298.703.466 1.125.466.879 0 1.591-.712 1.591-1.591 0-.422-.168-.827-.466-1.125l-4.392-4.392c-.456-.456-.368-1.217.18-1.557l4.112-2.552c.845-.525.721-1.791-.21-2.143L3.9 2.096C2.773 1.67 1.67 2.773 2.096 3.9z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold24.category = 'Arrows';

export default CursorBold24;
