import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 2.5L5.48335 7.76665C5.35447 7.89553 5.35447 8.10447 5.48335 8.23335L10.75 13.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled16.category = 'Arrows';

export default ChevronLeftBoldFilled16;
