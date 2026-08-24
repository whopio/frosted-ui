import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftBoldFilled24"
      {...props}
    >
      <path
        d="M15.25 3.5l-8.146 8.146c-.196.196-.196.512 0 .708L15.25 20.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled24.category = 'Arrows';

export default ChevronLeftBoldFilled24;
