import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17 2L7.35355 11.6464C7.15829 11.8417 7.15829 12.1583 7.35355 12.3536L17 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBold24.category = 'Arrows';

export default ChevronLeftBold24;
