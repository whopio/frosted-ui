import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBox20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftToLineInBox20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v9.3c0 2.955-2.395 5.35-5.35 5.35h-9.3C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zm-9.3 1.5C3.224 1.5 1.5 3.224 1.5 5.35v9.3c0 2.126 1.724 3.85 3.85 3.85h9.3c2.126 0 3.85-1.724 3.85-3.85v-9.3c0-2.126-1.724-3.85-3.85-3.85h-9.3zm1.4 4c.414 0 .75.336.75.75v7.5c0 .414-.336.75-.75.75S6 14.164 6 13.75v-7.5c0-.414.336-.75.75-.75zm6.47.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L11.06 10l3.22 3.22c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-3.75-3.75c-.14-.14-.22-.331-.22-.53s.08-.39.22-.53l3.75-3.75z"
        fill={color}
      />
    </svg>
  );
};

ChevronLeftToLineInBox20.category = 'Interface General';

export default ChevronLeftToLineInBox20;
