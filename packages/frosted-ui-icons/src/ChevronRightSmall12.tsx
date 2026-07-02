import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5 3.69971L7.12342 5.82313C7.22105 5.92076 7.22105 6.07905 7.12342 6.17668L5 8.3001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmall12.category = 'Arrows';

export default ChevronRightSmall12;
