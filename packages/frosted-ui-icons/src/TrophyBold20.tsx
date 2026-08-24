import * as React from 'react';
import { IconProps } from './types';

export const TrophyBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrophyBold20"
      {...props}
    >
      <path
        d="M13.654 1C14.95 1 16 2.05 16 3.346V4h1c1.105 0 2 .895 2 2v2c0 1.933-1.567 3.5-3.5 3.5h-.046c-.815 1.774-2.468 3.082-4.454 3.415V17h2.25c.552 0 1 .448 1 1s-.448 1-1 1h-6.5c-.552 0-1-.448-1-1s.448-1 1-1H9v-2.085c-1.986-.333-3.64-1.64-4.454-3.415H4.5C2.567 11.5 1 9.933 1 8V6c0-1.105.895-2 2-2h1v-.654C4 2.05 5.05 1 6.346 1h7.308zM6.346 3C6.155 3 6 3.155 6 3.346V9c0 2.21 1.79 4 4 4s4-1.79 4-4V3.346c0-.191-.155-.346-.346-.346H6.346zM3 8c0 .659.425 1.216 1.016 1.418C4.006 9.28 4 9.141 4 9V6H3v2zm13 1c0 .14-.007.28-.017.418C16.574 9.217 17 8.659 17 8V6h-1v3z"
        fill={color}
      />
    </svg>
  );
};

TrophyBold20.category = 'Objects';

export default TrophyBold20;
