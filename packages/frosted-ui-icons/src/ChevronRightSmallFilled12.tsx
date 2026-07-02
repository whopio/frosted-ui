import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 3.69971L7.12342 5.82313C7.22105 5.92076 7.22106 6.07905 7.12343 6.17668L5.0001 8.3001"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmallFilled12.category = 'Arrows';

export default ChevronRightSmallFilled12;
