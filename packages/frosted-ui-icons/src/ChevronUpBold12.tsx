import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBold12"
      {...props}
    >
      <path
        d="M2 7.75l3.823-3.823c.098-.098.256-.098.354 0L10 7.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold12.category = 'Arrows';

export default ChevronUpBold12;
