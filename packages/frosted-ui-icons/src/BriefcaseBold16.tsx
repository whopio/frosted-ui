import * as React from 'react';
import { IconProps } from './types';

export const BriefcaseBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BriefcaseBold16"
      {...props}
    >
      <path
        d="M9.24 1c1.386 0 2.51 1.124 2.51 2.51v.52C13.582 4.26 15 5.824 15 7.72v3.562C15 13.335 13.335 15 11.281 15H4.72C2.665 15 1 13.335 1 11.281V7.72C1 5.824 2.418 4.26 4.25 4.03v-.52C4.25 2.125 5.374 1 6.76 1h2.48zM13 10.393c-.239.067-.49.107-.75.107h-8.5c-.26 0-.511-.04-.75-.107v.888C3 12.231 3.77 13 4.719 13h6.562c.95 0 1.719-.77 1.719-1.719v-.888zM4.719 6C3.769 6 3 6.77 3 7.719v.031c0 .414.336.75.75.75h8.5c.414 0 .75-.336.75-.75v-.031C13 6.769 12.23 6 11.281 6H4.72zM6.76 3c-.282 0-.511.229-.511.51V4h3.5v-.49c0-.281-.229-.51-.51-.51H6.76z"
        fill={color}
      />
    </svg>
  );
};

BriefcaseBold16.category = 'Objects';

export default BriefcaseBold16;
