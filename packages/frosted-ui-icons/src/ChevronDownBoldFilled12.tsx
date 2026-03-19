import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.3999 4.75L5.82313 7.17323C5.92076 7.27086 6.07905 7.27086 6.17668 7.17323L8.59991 4.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled12.category = 'Arrows';

export default ChevronDownBoldFilled12;
