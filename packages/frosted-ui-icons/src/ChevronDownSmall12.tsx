import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.6999 5.05L5.82323 7.17333C5.92086 7.27096 6.07915 7.27096 6.17678 7.17333L8.3001 5.0501"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmall12.category = 'Arrows';

export default ChevronDownSmall12;
