import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.7002 6.9499L5.82332 4.82669C5.92095 4.72905 6.07925 4.72905 6.17688 4.82669L8.3001 6.95"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBold12.category = 'Arrows';

export default ChevronUpSmallBold12;
