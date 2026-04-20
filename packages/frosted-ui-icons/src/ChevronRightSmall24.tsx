import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.375 6.75L14.2714 11.6465C14.4667 11.8418 14.4667 12.1584 14.2714 12.3536L9.375 17.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmall24.category = 'Arrows';

export default ChevronRightSmall24;
