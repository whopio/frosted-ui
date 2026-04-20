import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 4V8M8 12V8M8 8H4M8 8H12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBold16.category = 'Interface General';

export default PlusSmallBold16;
