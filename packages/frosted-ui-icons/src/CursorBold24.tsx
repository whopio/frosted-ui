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
        d="M8.64 21.225L2.096 3.9C1.67 2.773 2.773 1.67 3.9 2.096L21.225 8.64c.93.352 1.054 1.618.209 2.143l-4.113 2.552c-.547.34-.635 1.101-.18 1.557l4.393 4.392c.298.298.466.703.466 1.125 0 .879-.712 1.591-1.591 1.591-.422 0-.827-.168-1.125-.466l-4.392-4.392c-.456-.456-1.217-.368-1.557.18l-2.552 4.112c-.525.845-1.791.721-2.143-.21z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold24.category = 'Arrows';

export default CursorBold24;
