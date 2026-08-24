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
      data-fui-icon="ChevronLeftBoldFilled16"
      {...props}
    >
      <path
        d="M9.25 3.5L4.983 7.767c-.129.129-.129.337 0 .466L9.25 12.5"
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
